import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chart',
  templateUrl: 'chart.component.html'
})
export class ChartComponent implements OnInit {
  dataSource:Object;
  constructor() {}

  ngOnInit() {
    this.dataSource = {
          chart: {
            caption: 'Summary Sales',
            subcaption: 'Last Year',
            startingangle: '120',
            showlabels: '0',
            showlegend: '1',
            enablemultislicing: '0',
            slicingdistance: '15',
            showpercentvalues: '1',
            showpercentintooltip: '0',
            plottooltext: 'Age group : $label Total visit : $datavalue',
            theme: 'carbon'
          },
          data: [
          {
            label: 'Teenage',
            value: '1250400'
          },
          {
            label: 'Adult',
            value: '1463300'
          },
          {
            label: 'Mid-age',
            value: '1050700'
          },
          {
            label: 'Senior',
            value: '491000'
          }
          ]
        }       
  }
}



