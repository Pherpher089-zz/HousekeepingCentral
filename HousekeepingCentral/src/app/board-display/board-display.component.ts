import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-board-display',
  templateUrl: './board-display.component.html',
  styleUrls: ['./board-display.component.sass']
})
export class BoardDisplayComponent implements OnInit {
  @Input() updatedBoards: any[] = [];

  constructor() { }
  ngOnInit(): void {
    console.log(this.updatedBoards)
  }

  ngOnChanges(changes:SimpleChange){
    console.log(changes, "changes")
  }


} 
