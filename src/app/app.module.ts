import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ListagemPetComponent } from './pet/listagem-pet/listagem-pet.component';
import { FirestoreModule } from './firestore/firestore.module';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { CadastroPetComponent } from './pet/cadastro-pet/cadastro-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListagemPetComponent,
    LoginFormComponent,
    CadastroPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    FirestoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
