import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { FirestoreService } from './firestore.service';
import { Multiple } from './multiple';
import { UserValue } from './userValue';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //#region 'Input, Output, ViewChild'
  //#endregion 'Input, Output, ViewChild'

  //#region 'Variables'
  public multiplesForm = new FormGroup({});
  public multiplesResult: _.Dictionary<Array<Multiple>> = {};
  //#endregion 'Variables'

  //#region 'Angular Life Cycle'
  constructor(private fb: FormBuilder, private firestoreServices: FirestoreService) {}

  ngOnInit() {
    this.initialize();
  }
  //#endregion 'Angular Life Cycle'

  //#region 'Load'
  // TODO: Función para inicializar el FormGroup
  private initialize() {
    this.multiplesForm = this.fb.group({
      number: [null, [Validators.required]],
    });
  }
  //#endregion 'Load'

  //#region 'General Methods'
  // TODO: Función para respetar el orden del resultado (this.multiples orderBy)
  public originalOrderer(a: any, b: any) {
    return 1;
  }

  // TODO: Función que calcula los multiplos de un número entre 0 y otro numero
  // * Parametro 'of': multiplos de.
  // * Parametro 'limintNumber': hasta que nímero queremos sacar los multiplos
  private getMultiples(of: number, limitNumber: number): Array<Multiple> {
    //? Arreglo de objetos clave valor
    let multiples: Array<Multiple> = [];

    for (let index = 0; index <= limitNumber; index++) {
      if (index % of === 0) {
        //? Si el residuo es 0 agregamos el dato al array
        multiples.push({ of: of, value: index });
      }
    }

    return multiples;
  }
  /**
   * calculateHandler
   */
  public calculateHandler() {
    //? Obtenemos el valor ingresado por el usuario
    let liminNumber = this.fc['number'].value;

    //? Obetenemos los multiplos de cada número dado en los requerimientos y los unimos en un solo arreglo
    let multiples = _.concat(
      this.getMultiples(3, liminNumber),
      this.getMultiples(5, liminNumber),
      this.getMultiples(7, liminNumber)
    );

    //? Ordenamos y lo agrupamos por valor de multiplo
    this.multiplesResult = _.groupBy(_.orderBy(multiples), 'value');

    //? Creamos un objeto para guardar la información en firestore
    let userValue = { multiples: multiples, value: liminNumber } as UserValue;

    //? Llamamos el metodo el cual se encarga de guarda info en firestore
    this.firestoreServices.create(userValue);
  }

  // TODO: Función que calcula la clase que debe llevar cada resultado
  public calculateClass(multiple: KeyValue<string, Array<Multiple>>): {
    [key: string]: boolean;
  } {
    //? Obtenemos el mínimo entre los 3 valores dados en los requerimientos
    let min = _.min(multiple.value)?.of;

    //? Retornamos la clase segun el valor mínimo obtenido
    switch (min) {
      case 3:
        return { green: true };
      case 5:
        return { red: true };
      case 7:
        return { blue: true };
      default:
        return { '': false };
    }
  }
  //#endregion 'General Methods'

  //#region 'Validations'
  //#endregion 'Validations'

  //#region 'CRUD'
  //#endregion 'CRUD'

  //#region 'Getters/Setters'
  // TODO: Función get para obtenemos los controles del FormGroup
  public get fc(): { [key: string]: AbstractControl } {
    return this.multiplesForm.controls;
  }

  //#endregion 'Getters/Setters'
}
