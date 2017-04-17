import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
	moduleId: module.id,
	selector: 'side-nav',
	templateUrl: 'sideNav.component.html',
  	styleUrls: ['sideNav.component.scss'],
  	encapsulation: ViewEncapsulation.None

})
export class sideNavComponent implements OnInit {
	private items: MenuItem[];
	constructor() {}
	ngOnInit() {
		this.items = [{
		           label: 'Task',
		           items: [
		               {label: 'Assinged To Task', icon: 'fa-plus', routerLink: '/task'},
		               {label: 'Assigned To Group', icon: 'fa-download', routerLink: '/group'},
		               {label: 'Director', icon: 'fa-home', routerLink: '/director'}

		           ]
		       }];		
	}
}