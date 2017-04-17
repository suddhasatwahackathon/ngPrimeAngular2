import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'app works!';
	name: string; 
	message: string;

	onClick() {
		this.message = 'Hello ' + this.name;
	}
}
