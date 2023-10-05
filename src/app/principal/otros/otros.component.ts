import { Component } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent {

  nombre: string = "Pablo";
  genero: string = "masculino";

  usuarios: string[] = [
    'Pablo',
    'Ramon',
    'Camila',
    'Rabbit'
  ]

  usuariosMapa = {
    '=0' : 'no hay usuarios en linea',
    '=1' : '1 usuario en linea',
    '=2' : '2 usuarios en linea',
    'other' : '# usuarios en linea'
  }


  bienvenidoMapa = {
    'masculino': 'Bienvenido',
    'femenino': 'Bienvenida',
    'no binario': 'Bienvenidx'
  }

}
