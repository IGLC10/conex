import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {

	user = "";
	last = "";
	json = [
		{user: "Eduardo", lastname: "Solis"},
		{user: "Eduarre", lastname: "Solis"}
	]

	login(){
		for (let i = 0; i < this.json.length; i++) {
			if(this.user == this.json[i].user && this.last == this.json[i].lastname){

				window.location.href="/login";
			}
		}
		
	}

  constructor() { }

  ngOnInit(): void {
  }

}
