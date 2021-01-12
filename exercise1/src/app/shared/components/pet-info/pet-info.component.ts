import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet[] = [
    {
      name: 'Bogart',
      breed: 'Hound-mix'
    },
    {
      name: 'Willy',
      breed: 'Snake'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
