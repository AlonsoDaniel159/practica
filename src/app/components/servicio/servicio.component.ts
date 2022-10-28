import { Component, OnInit } from '@angular/core';
import { PracticaService } from 'src/app/services/practica.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styles: [
  ]
})
export class ServicioComponent implements OnInit {

  paises: any;

  constructor(private service: PracticaService) { }

  ngOnInit(): void {
    this.service.getData().subscribe({
      next: resp => {
        console.log(resp);
        this.paises = resp;
      }   
    })
  }


}
