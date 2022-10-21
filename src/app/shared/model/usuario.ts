import { Pet }  from './pet';

export class Usuario{
  id: string;
  nome: string;
  email: string;
  pet: Array<string>;
  senha: string;
  repitasenha: string;

  constructor(id : string, nome: string, email: string, pet: Array<string>, senha: string, repetsenha: string ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.pet = pet;
    this.senha = senha;
    this.repitasenha = repetsenha;
  }
}
