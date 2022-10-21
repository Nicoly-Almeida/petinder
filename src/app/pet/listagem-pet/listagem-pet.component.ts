import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/model/pet';
import { PetService } from 'src/app/shared/services/pet.service';

@Component({
  selector: 'app-listagem-pet',
  templateUrl: './listagem-pet.component.html',
  styleUrls: ['./listagem-pet.component.scss']
})
export class ListagemPetComponent implements OnInit {
  pets: Pet[];

  constructor(private petService: PetService) {
    this.pets = new Array<Pet>();
  }
  ngOnInit(): void {
    this.petService.listar().subscribe(
      pets => this.pets = pets
    );
  }

  deletar(pet: Pet): void {
    this.petService.deletar(pet.id).subscribe(
      () => {
        this.pets = this.pets.filter(p => p.id !== pet.id)
      }
    );
  }

}
