import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: string[];
  constructor() { 
    this.destinos = ['Barcelona', 'Buenos Aires', 'Lima', 'San José'];
  }

  ngOnInit(): void {
  }

}
