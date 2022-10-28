import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interno02',
  templateUrl: './interno02.component.html',
  styles: [
  ]
})
export class Interno02Component implements OnInit {

  heroes: any = [
    {
      "id": "dc-batman",
      "superhero": "Batman",
      "publisher": "DC Comics",
      "first_appearance": "Detective Comics #27",
      "characters": "Bruce Wayne"
    },
    {
      "id": "dc-superman",
      "superhero": "Superman",
      "publisher": "DC Comics",
      "first_appearance": "Action Comics #1",
      "characters": "Kal-El"
    },
    {
      "id": "dc-flash",
      "superhero": "Flash",
      "publisher": "DC Comics",
      "first_appearance": "Flash Comics #1",
      "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
      "id": "marvel-captain",
      "superhero": "Captain America",
      "publisher": "Marvel Comics",
      "first_appearance": "Captain America Comics #1",
      "characters": "Steve Rogers"
    },
    {
      "id": "marvel-iron",
      "superhero": "Iron Man",
      "publisher": "Marvel Comics",
      "first_appearance": "Tales of Suspense #39",
      "characters": "Tony Stark"
    },
    {
      "id": "marvel-thor",
      "superhero": "Thor",
      "publisher": "Marvel Comics",
      "first_appearance": "Journey into Myster #83",
      "characters": "Thor Odinson"
    },
    {
      "id": "marvel-spider",
      "superhero": "Spider Man",
      "publisher": "Marvel Comics",
      "first_appearance": "Amazing Fantasy #15",
      "characters": "Peter Parker"
    },
    {
      "id": "marvel-hulk",
      "superhero": "Hulk",
      "publisher": "Marvel Comics",
      "first_appearance": "The Incredible Hulk #1",
      "characters": "Bruce Banner"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
