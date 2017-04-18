import { Component, OnInit } from '@angular/core';
import { SelectItem }  from 'primeng/primeng';

let max = 5;

@Component({
	moduleId: module.id,
	template:`
	<ul>
	<li> AK Sharma</li>
	<li>NK Jain</li>
	<li>SP Gupta</li>
	<li>SS Gupta</li>
	<li>MS Agarwal</li>
	</ul>
	<div>Click <a routerLink='/director/list/nested'>here</a> for nested list view</div>
	<div class='inner-outlet'>
	<router-outlet></router-outlet>
	</div>
	`
})
export class DirectorListComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}


@Component({
	moduleId: module.id,
	templateUrl:'directorlist.component.html'
})
export class DirectorListNestedComponent implements OnInit {
	cars:Object;
	cols: any[];
	columnOptions: SelectItem[];
	constructor() {
	}
	ngOnInit() {
		this.cars = [
        {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
    
    this.cols = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];
    
    this.columnOptions = [];
    for(let i = 0; i < this.cols.length; i++) {
        this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
    }
	}
}