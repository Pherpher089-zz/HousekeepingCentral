import { Component, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-hotel-animation',
	styleUrls: ['./hotel-animation.component.sass'],
	template: `
		<ng-lottie
			[options]="options"
			width="280px"
			height="50%"
			(loopComplete)="onLoopComplete()"
		></ng-lottie>
	`,
})
export class HotelAnimationComponent {
	options: AnimationOptions = {
		path: '/assets/money.json',
		loop: false,
	};

	onLoopComplete(): void {
		NgZone.assertNotInAngularZone();
		console.log(NgZone.isInAngularZone()); // false
	}
}
