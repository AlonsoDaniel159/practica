import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interno01',
  templateUrl: './interno01.component.html',
  styles: [
  ]
})
export class Interno01Component implements OnInit {

  usuarios: any = [
    {
      "id": 1,
      "usuario": "alonso159",
      "email": "alonso159@gmail.com",
      "telefono": 526341526
    },
    {
      "id": 2,
      "usuario": "daniel123",
      "email": "daniel123@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 3,
      "usuario": "mariano159",
      "email": "mariano159@gmail.com",
      "telefono": 569856389
    },
    {
      "id": 4,
      "usuario": "jose159",
      "email": "jose159@gmail.com",
      "telefono": 129656789
    },
    {
      "id": 5,
      "usuario": "ara122",
      "email": "ara122@gmail.com",
      "telefono": 956961619
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
