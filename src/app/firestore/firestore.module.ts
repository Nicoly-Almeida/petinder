import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConfig } from 'firestore.config';
import {AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirestoreModule,
    AngularFireModule.initializeApp(FirebaseConfig),

  ]
})
export class FirestoreModule { }
