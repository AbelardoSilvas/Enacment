import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserValue } from './userValue';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  //#region 'Variables'
  userValuesRef: AngularFirestoreCollection<UserValue>;
  //#endregion 'Variables'

  //#region 'Angular Life Cycle'
  constructor(private db: AngularFirestore) {
    this.userValuesRef = db.collection('user-value');
  }
  //#endregion 'Angular Life Cycle'

  //#region 'Get'
  //#endregion 'Get'

  //#region 'Create'
  //? Función que guarda la info en la base de datos
  create(userValue: UserValue): any {
    this.userValuesRef.add({ ...userValue });
  }

  //#endregion 'Create'

  //#region 'Update'
  //#endregion 'Update'

  //#region 'Delete'
  //#endregion 'Delete'

  //#region 'Other'
  //#endregion 'Other'
}
