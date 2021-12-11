import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower:string='edwin granados'
  nombreUpper:string='EDWIN GRANADOS'
  nombreTittle:string='Edwin Granados'
  
  fehca:Date = new Date();
}
