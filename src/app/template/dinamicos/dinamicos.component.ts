import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'
  ]
})
export class DinamicosComponent implements OnInit {
  
  secciones:string[]=["Soporte","Archivo","Recursos Humanos"];
  constructor() { }

  ngOnInit(): void {
  }

}
