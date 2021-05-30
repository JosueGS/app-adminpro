import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {


  public subcripInterval:Subscription;

  constructor() {



    // this.retornaObservable().pipe(
    //   retry(1)
    // )
    // .subscribe(
    //   valor => console.log('Sale:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.log('Se termino el observable')
    //  )

    this.subcripInterval = this.retornaIntervalo().subscribe(console.log);

  }
  ngOnDestroy(): void {
    this.subcripInterval.unsubscribe();
  }

  ngOnInit(): void {
  }


  retornaIntervalo(): Observable<number>{

    return interval(100).pipe(
            map( valor =>  valor + 1 ),
            filter( valor =>  (valor % 2 == 0) ? true : false ),
            // take(10)//cuando es false la instruccion de arriba no se dispara(ejecuta) este operador
              );

  }


  retornaObservable():Observable<number>{
    let i = -1;
    return new Observable<number>( observer =>{


      const intervalo = setInterval(()=>{

        i++;

        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('Ocurrio un error en el 2')
        }

      },1000  )

    });

    // return obs$;
  }
}
