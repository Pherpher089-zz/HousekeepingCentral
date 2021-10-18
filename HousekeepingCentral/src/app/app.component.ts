import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'HousekeepingCentral';
<<<<<<< HEAD
  queens: any = {112:112,113:113,116:116,
    212:212,214:214,215:215,
    216:216,217:217,218:218,
    219:219,220:220,221:221,
    222:222, 224:224, 225:225, 
    226:226, 227:227,228:228,
    229:229,230:230, 231:231, 
    232:232,312:312,314:314, 
    315:315,316:316,317:317,
    318:318,319:319,320:320, 
    321:321, 322:322, 324:324, 
    325:325, 326:326,327:327, 
    328:328,329:329,330:330, 
    331:331, 332:332,412:412,
    414:214,415:415, 416:416,
    417:417,418:418,419:419,
    420:420,421:421,422:422,
    424:424,425:425,426:426,
    427:427,428:428,429:429,
    430:430,431:431,432:432}

  totalQueens: number = 0;
  roomNumberInput: any=0;
  numberOfBoards: number = 6;
=======
  roomNumberInput: number = 0;
  numberOfBoards: number = 0;
>>>>>>> 270d62ce50ea11a88a5eeca8047bc6805adf4b9f
  currentBoard: number = 0;
  boards: any[] = [];

  createBoards() {
    var myGrid = [...Array(Number(this.numberOfBoards))].map((e) =>
      Array(Number())
    );
    this.boards = myGrid;
    console.log(this.boards);
  }

<<<<<<< HEAD
  addRoom(){
    if(this.queens[this.roomNumberInput]){ }
    this.boards[this.currentBoard]=[...this.boards[this.currentBoard], this.roomNumberInput]
=======
  addRoom() {
    this.boards[this.currentBoard] = [
      ...this.boards[this.currentBoard],
      this.roomNumberInput,
    ];
>>>>>>> 270d62ce50ea11a88a5eeca8047bc6805adf4b9f
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
<<<<<<< HEAD

  sortBoards(){
    let sorted = false;
    let QQs = this.getQueens();
    let avgQueens = 3; //Needs to be set to average number
    let hasStep = 0; //set to the remainder of number of queens/ houskeeping boards
    let currentBoard = 0;
    while(!sorted) {
      sorted = true;
        while(QQs[currentBoard].length != avgQueens) {
          if(QQs[currentBoard].length > avgQueens)
          {
            var room = QQs[currentBoard].pop();
            QQs[currentBoard+1].push();   
          }
        }
        //when incrementing current board, skip the last index
    }

  }

  getQueens(){
    //Find all of the queens and return an array of them
    return [[1,2]];
  }

=======
>>>>>>> 270d62ce50ea11a88a5eeca8047bc6805adf4b9f
}
