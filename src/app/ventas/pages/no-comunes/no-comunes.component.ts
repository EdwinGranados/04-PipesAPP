import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect 
  nombre: string = 'Edwin';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarGenero(){
    if(this.genero == 'masculino'){
      this.genero = 'femenino'
      this.nombre = 'Natalia'
    }else{
      this.genero ='masculino'
      this.nombre = 'Edwin'
    }
  }
  //i18nPrural
  clientes: string[] = ['Maria', 'Pedro', 'juan','edwin','fernando'];
  clientesMap = {
    '=0': 'no temenos ningun cliente esperando,',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }
  borrarCliente(){
    this.clientes.shift();
  }

  //keyValue pipe 
  persona = {
    nombre:'Edwin',
    edad: 22,
    direccion:'Bogota,Colombia'
  }
  //Json pipe \
  heroes =[
    {
      nombre:'Superman',
      Vuela:'Vuela'
    },
    {
      nombre:'batman',
      Vuela:'no Vuela'
    },
    {
      nombre:'flash',
      Vuela:'no Vuela'
    },
  ]
  //Asinc pipe 
  miObservable = interval(1000); // 0,1,2,3...
  valorPromesa = new Promise((resolve) => {
    setTimeout(()=> {
      resolve('Tenemos data de promesa ')
    },3500)
  })
}

