import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombre: string =  "pablo";
  apellido: string = 'frers';
  nombreCompleto: string = this.nombre+" "+ this.apellido;

  fecha: Date = new Date();
}
