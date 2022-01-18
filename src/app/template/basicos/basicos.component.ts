import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() {
    this.multiplicacion(parseInt(this.number1),this.number2)
    
   }

  public number1:string="2";
  public number2:number=6;

 private multiplicacion( n1:number, n2:number){
    console.log("El resultado es : ", n1*n2);
  }

  ngOnInit(): void {
  }



}
