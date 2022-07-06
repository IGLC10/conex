import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit {

  json = [
    {temp: 31, humedad: 10, sensor: "Aula 22"},
    {temp: 27, humedad: 12, sensor: "Cafeteria"},
    {temp: 33, humedad: 15, sensor: "Laboratorio"},
    {temp: 32, humedad: 11, sensor: "Aula 21"}
  ]
  valor="";

  constructor() { }

  ngOnInit(): void {
  }

}
