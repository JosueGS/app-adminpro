import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.getUsuarios().then( usuarios =>{
    //   console.log(usuarios)
    //   console.log('Hola rpta');
    // })

    // const promesa = new Promise( ( resolve, reject )=>{

    //   if ( false ) {
    //     resolve('Hello world');
    //   } else {
    //     reject('Algo salio mal');
    //   };

    // } );

    // promesa.then( (mensaje)=>{

    //     console.log(mensaje);
    // })
    // .catch( error => console.log('Error en mi promesa.', error)
    //  )


    // console.log('Cargo el componente');

  }


  getUsuarios(){

    return new Promise( resolve =>{

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve(body.data)//si el resultado sale bien esto es ascincrono
        );

    });


  }

}
