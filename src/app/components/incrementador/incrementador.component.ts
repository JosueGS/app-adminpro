import { Component, Input, Output, OnInit} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{


  ngOnInit() {
    this.btnClass = ` btn ${this.btnClass}`;
  }

  @Input('valor') progreso : number = 50;
  @Input() btnClass: string = 'btn-primary';
  // @Input() progreso : number = 50;

  @Output() valorSaliente: EventEmitter<number> = new EventEmitter();

  // get getProgreso(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor:number){

    if ( this.progreso >= 100 && valor >= 0) {
      this.valorSaliente.emit(100);
      return this.progreso = 100;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSaliente.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorSaliente.emit(this.progreso )
  }

  onChange(nuevovalor:number){

    // this.valorSaliente.emit(valor);

    if (nuevovalor >= 100) {
      this.progreso = 100;
    } else if( nuevovalor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevovalor;
    }

    this.valorSaliente.emit(this.progreso);
  }

}
