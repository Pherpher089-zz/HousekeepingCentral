import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'HousekeepingCentral';
  queens: any = {
    112: 112,
    113: 113,
    116: 116,
    212: 212,
    214: 214,
    215: 215,
    216: 216,
    217: 217,
    218: 218,
    219: 219,
    220: 220,
    221: 221,
    222: 222,
    224: 224,
    225: 225,
    226: 226,
    227: 227,
    228: 228,
    229: 229,
    230: 230,
    231: 231,
    232: 232,
    312: 312,
    314: 314,
    315: 315,
    316: 316,
    317: 317,
    318: 318,
    319: 319,
    320: 320,
    321: 321,
    322: 322,
    324: 324,
    325: 325,
    326: 326,
    327: 327,
    328: 328,
    329: 329,
    330: 330,
    331: 331,
    332: 332,
    412: 412,
    414: 214,
    415: 415,
    416: 416,
    417: 417,
    418: 418,
    419: 419,
    420: 420,
    421: 421,
    422: 422,
    424: 424,
    425: 425,
    426: 426,
    427: 427,
    428: 428,
    429: 429,
    430: 430,
    431: 431,
    432: 432,
  };

  roomNumberInput: any = 0; //Holds the room number the user is currently inputting
  numberOfBoards: number = 6; //How many housekeeping boards are we sorting today?
  currentBoard: number = 0; //What board are we adding rooms to?
  boards: any[] = []; //The house keeping boards
  queenBoards: any[] = []; // A 2D array holding all of the queen room numbers based on input
  averageQueens: any[] = []; //The average number of QQs per board. An array holds the average if there is a remainder
  totalQueens: number = 0; //Total number of queen rooms to be cleaned today

  createBoards() {
    var myGrid = [...Array(Number(this.numberOfBoards))].map((e) =>
      Array(Number())
    );
    this.boards = myGrid;
    console.log(this.boards);
  }

  //Add the room number the user input when they hit submit
  addRoom() {
    this.boards[this.currentBoard] = [
      ...this.boards[this.currentBoard],
      this.roomNumberInput,
    ];
  }

  /*This will sort the queens out of the current board list, and calculate the average number of queens per room. If there is a remainder on the average, it will be added as the second element in the averageQueens array.*/
  sortRooms(){
    for(let i = 0; i < this.boards.length-1; i++) {
      for(let j=0; j < this.boards[i].length-1; j++) {
        if(this.queens[this.boards[i][i]]) {
          this.queenBoards[i] = [...this.queenBoards[i], this.boards[i][j]];
          this.boards[i].pop(j);
          this.totalQueens++;
        }
      }
    }
    //Gets the average number of queen rooms
    this.averageQueens[0] = this.totalQueens/this.numberOfBoards;
    if(this.totalQueens%this.numberOfBoards!==0){
      this.averageQueens[1] = this.totalQueens%this.numberOfBoards;
    }

    console.log(this.boards)
    console.log(this.queenBoards)
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

  sortBoards() {
    this.sortRooms();
    let sorted = false; //Much like the bubble sort, this will iterate the boards until its complete
    this.currentBoard = 0;
    while (!sorted) {
      sorted = true;
      
      let currentAverage = 0;
      if(this.averageQueens[1] <= 0){
        currentAverage = this.averageQueens[0] - 1;
      } else {
        currentAverage = this.averageQueens[0];
      }
      while (this.queens[this.currentBoard].length != currentAverage) {
        if(this.queens[this.currentBoard].length < currentAverage && this.queenBoards[this.currentBoard+1].length == 0)
        if (this.queenBoards[this.currentBoard].length > currentAverage) {
          //Get the room off the queens board
          var room = this.queenBoards[this.currentBoard].pop(this.queenBoards[this.currentBoard].length-1);
          // Add it to the queens board in front of the current board
          this.queenBoards[this.currentBoard + 1] = [
            ...this.queenBoards[this.currentBoard +1],
            room,
          ];
          //Add a king from next board to current board
          room = this.boards[this.currentBoard + 1].pop(0);
          this.boards[this.currentBoard]=[...this.boards[this.currentBoard], room]

          //if the current queen board had to little queens
        } else if (this.queenBoards[this.currentBoard].length < currentAverage) {
          //Get a queen room from the current board and add it to the next board
          var room = this.queenBoards[this.currentBoard+1].pop(0);
          this.queenBoards[this.currentBoard] = [
            ...this.queenBoards[this.currentBoard],
            room,
          ];
          room = this.boards[this.currentBoard].pop(this.boards[this.currentBoard].length-1);
          this.boards[this.currentBoard +1]=[...this.boards[this.currentBoard+1], room]
        }

        if(this.queenBoards[this.currentBoard].length === currentAverage) {
          this.averageQueens[1]--;
        }
      
      }
      //when incrementing current board, skip the last index
    }
  }
}

//[] Gather Queens
