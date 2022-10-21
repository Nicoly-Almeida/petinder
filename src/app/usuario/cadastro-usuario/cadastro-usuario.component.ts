import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Pet } from 'src/app/shared/model/pet';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  router: Router;

  usuario : Usuario;
  pet : Pet;

  constructor(router: Router, private UsuarioService: UsuarioService) {
    this.router = router;
    this.pet = new Pet('', '', '','', 0);
    this.usuario = new Usuario('','', '', [this.pet] ,'','');
  }

  ngOnInit(): void {
  }

  inserir(){
    this.UsuarioService.inserir(this.usuario).subscribe(
      users => {
        Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/listagem-pet']);
      }, 3000);
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao cadastrar usuário!',
        })
      }
      );
    this.usuario = new Usuario('','', '', [this.pet] ,'','');
  }

}
