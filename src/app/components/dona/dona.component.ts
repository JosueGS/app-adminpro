import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input('title') mytitle: string = 'Sin Titulo';
  // @Input('label') mylabel: string[] =

  @Input('mylabel') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('mydata') doughnutChartData4: MultiDataSet = [
    [350, 450, 100]
  ];

  public color:Color[] = [
    {  backgroundColor: ['#6857E6', '#009FEE','#F02059']}
  ]

}
