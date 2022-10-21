export class Pet {
  id: string;
  nome: string;
  raca: string;
  sexo: string;
  idade: number;

  constructor(id: string , nome: string, raca: string, sexo: string, idade: number ) {
    this.id = id;
    this.nome = nome;
    this.raca = raca;
    this.sexo = sexo;
    this.idade = idade;

  }
}
