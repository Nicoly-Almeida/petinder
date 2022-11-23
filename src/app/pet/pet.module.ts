import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPetComponent } from './listagem-pet/listagem-pet.component';



import {MatCardHarness} from '@angular/material/card/testing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CadastroPetComponent } from './cadastro-pet/cadastro-pet.component';

@NgModule({
  declarations: [
    ListagemPetComponent,
    CadastroPetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCardHarness,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ListagemPetComponent
  ]
})
export class PetModule { }
