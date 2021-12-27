import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = false
  ordenarPor:string='';
  herores: Heroe[] =[
    {
      nombre:'Superman',
      vuela: true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color:Color.rojo
    },
    {
      nombre:'Dedrevil',
      vuela: false,
      color:Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela: true,
      color:Color.verde
    },
  ] 

  cambiarLetra(){
    this.enMayusculas = !this.enMayusculas
  }
  ordenar(Valor:string){
    this.ordenarPor = Valor;
  }

}
