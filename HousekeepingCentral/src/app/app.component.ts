import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	title = 'HotelPetaluma';
	page: string = 'home';
	currentTitle: string = 'Competitor Rates';

	onSelectHome(event: any) {
		this.page = 'home';
		this.currentTitle = 'Competitor Rates';
	}
	onSelectHousekeeping(event: any) {
		this.page = 'housekeeping';
		this.currentTitle = 'Housekeeping Central';
	}
}
