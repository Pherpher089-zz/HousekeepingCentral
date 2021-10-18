import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'HousekeepingCentral';
  roomNumberInput: number = 0;
  numberOfBoards: number = 0;
  currentBoard: number = 0;
  boards: any[] = [];

  createBoards() {
    var myGrid = [...Array(Number(this.numberOfBoards))].map((e) =>
      Array(Number())
    );
    this.boards = myGrid;
    console.log(this.boards);
  }

  addRoom() {
    this.boards[this.currentBoard] = [
      ...this.boards[this.currentBoard],
      this.roomNumberInput,
    ];
  }

  updateBoardNumber(event: any) {
    this.numberOfBoards = event.target.value;
  }
  updateRoomNumber(event: any) {
    this.roomNumberInput = event.target.value;
  }

  nextBoard() {
    if (this.currentBoard < this.numberOfBoards - 1) {
      this.currentBoard++;
    } else {
      this.currentBoard = 0;
    }
  }
  prevBoard() {
    if (this.currentBoard > 0) {
      this.currentBoard--;
    } else {
      this.currentBoard = this.numberOfBoards - 1;
    }
  }
}
