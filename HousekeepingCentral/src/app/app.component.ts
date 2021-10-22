import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	title = 'HotelPetaluma';
	page: string = 'home';

	onSelectHome(event: any) {
		this.page = 'home';
	}
	onSelectHousekeeping(event: any) {
		this.page = 'housekeeping';
	}
}
