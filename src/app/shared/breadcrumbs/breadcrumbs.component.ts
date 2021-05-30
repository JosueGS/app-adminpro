import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public titulo:string;
  public titulosubs$:Subscription;

  constructor( private router: Router, private routerat: ActivatedRoute ) {

    this.titulosubs$ = this.getDataRouter().subscribe( ({titulo}) => {
                          this.titulo = titulo;
                          document.title = `Admin Pro - ${titulo}`;
                            });
  }

  ngOnInit(): void {

  }

  getDataRouter(){

    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd  ),
        filter( (event:ActivationEnd) =>  event.snapshot.firstChild === null ),
        map( (event:ActivationEnd) => event.snapshot.data )
      )

  }

}
