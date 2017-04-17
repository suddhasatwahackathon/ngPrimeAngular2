import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export class topComponentModule{

}
@Component({
	moduleId: module.id,
	selector: 'top',	
	templateUrl: 'top.component.html',
  	styleUrls: ['top.component.scss'],
})
export class topComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}
