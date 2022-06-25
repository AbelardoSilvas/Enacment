import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { LoaderComponent } from './loader/loader.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyC5uyprMWopsiLhdZ21ULJ6rim-EOF3bjM',
  authDomain: 'enacment-cf2fb.firebaseapp.com',
  projectId: 'enacment-cf2fb',
  storageBucket: 'enacment-cf2fb.appspot.com',
  messagingSenderId: '732615924922',
  appId: '1:732615924922:web:92f64364a75a6757e4f683',
};

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  declarations: [LoaderComponent, OnlyNumbersDirective],
  exports: [LoaderComponent, OnlyNumbersDirective, AngularFireStorageModule],
})
export class SharedModule {}
