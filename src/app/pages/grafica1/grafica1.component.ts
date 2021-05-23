import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  title1:string = 'Firts title';
  title2:string = 'Second title';
  title3:string = 'Third title';
  title4:string = 'Fourth title';

  label1: string[] =['Download First', 'In-Store First', 'Mail-Order First'];
  label2: string[] =['Download Second', 'In-Store Second', 'Mail-Order Second'];
  label3: string[] =['Download Third', 'In-Store Third', 'Mail-Order Third'];
  label4: string[] =['Download Fourth', 'In-Store Fourth', 'Mail-Order Fourth'];
  data1 = [250, 350, 100];
  data2 = [150, 150, 100];
  data3 = [250, 350, 50];
  data4 = [50, 250, 100];
}
