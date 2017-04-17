import { Component, OnInit } from '@angular/core';
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
	sayHello:string;
	routeName:string;
	floatingLabel: string = 'auto';
	color: boolean;
	requiredField: boolean;
	ctrlDisabled = false;
	name: string;
	errorMessageExample1: string;
	errorMessageExample2: string;
	errorMessageExample3: string;
	items: any[] = [
	{ value: 10 },
	{ value: 20 },
	{ value: 30 },
	{ value: 40 },
	{ value: 50 },
	];
	rows = 8;
	model = 'hello';

	addABunch(n: number) {
		for (let x = 0; x < n; x++) {
			this.items.push({ value: ++max });
		}
	}	
	constructor() {
		this.routeName = "Nested Route";
		this.sayHello = 'my hello world';

	}
	ngOnInit() {

	}
}