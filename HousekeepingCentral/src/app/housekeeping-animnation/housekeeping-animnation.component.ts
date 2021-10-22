import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-housekeeping-animnation',
	styleUrls: ['./housekeeping-animnation.component.sass'],
	template: `
		<ng-lottie
			[options]="options"
			width="280px"
			(animationCreated)="animationCreated($event)"
		></ng-lottie>
	`,
})
export class HousekeepingAnimnationComponent {
	options: AnimationOptions = {
		path: '/assets/housekeeper.json',
	};

	animationCreated(animationItem: AnimationItem): void {
		console.log(animationItem);
	}
}
