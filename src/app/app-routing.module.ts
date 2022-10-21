import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemPetComponent } from './pet/listagem-pet/listagem-pet.component';

const routes: Routes = [
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listagem-pet',
    component: ListagemPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
