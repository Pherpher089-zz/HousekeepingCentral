import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-loading',
	styleUrls: ['./loading.component.sass'],
	template: `
		<ng-lottie
			[options]="options"
			width="280px"
			(animationCreated)="animationCreated($event)"
		></ng-lottie>
	`,
})
export class LoadingComponent {
	options: AnimationOptions = {
		path: '/assets/loading.json',
	};

	animationCreated(animationItem: AnimationItem): void {
		console.log(animationItem);
	}
}
