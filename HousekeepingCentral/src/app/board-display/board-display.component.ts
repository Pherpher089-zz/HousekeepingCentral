import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
	selector: 'app-board-display',
	templateUrl: './board-display.component.html',
	styleUrls: ['./board-display.component.sass'],
})
export class BoardDisplayComponent implements OnInit {
	@Input() updatedBoards: any[] = [];
	@Input() queens: any = {};
	@Input() changes: any[] = [];
	@Input() hasSorted: boolean = false;
	@Input() currentBoard: number = 0;

	constructor() {}
	ngOnInit(): void {
		console.log(this.currentBoard, 'current board');
	}

	ngOnChanges(c: SimpleChange) {}
}
