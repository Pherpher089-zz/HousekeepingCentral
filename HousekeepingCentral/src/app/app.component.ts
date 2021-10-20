import { Component, OnChanges, SimpleChange } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms' 

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
  sortedBoards: any[] = [];
  changes: any[] = [];
  queenBoards: any[] = []; // A 2D array holding all of the queen room numbers based on input
  kingBoards: any[] = [];
  averageQueens: any[] = []; //The average number of QQs per board. An array holds the average if there is a remainder
  averageKings: any[] = [];
  totalQueens: number = 0; //Total number of queen rooms to be cleaned today
  totalKings: number = 0;
  allRooms: any = {}
  dupRoomWarning: string = '';
  boardsQuantity = new FormControl('')
  roomNumber = new FormControl('')

  createBoards(event: Event) {
    event.preventDefault()
    var myBoards = [...Array(Number(this.boardsQuantity.value))].map((e) =>
      Array(Number())
    );
    this.boardsQuantity.setValue('');
    this.allRooms = {};
    //copying myBoards array by value
    this.boards = myBoards.slice();
    this.sortedBoards = myBoards.slice();
    this.changes = myBoards.slice();
    this.kingBoards = []
    this.queenBoards = []
  }

  //Add the room number the user input when they hit submit
  addRoom(e: any) {
    e.preventDefault()
    
    if(this.allRooms[this.roomNumberInput]) {
      this.dupRoomWarning = this.roomNumberInput + " has already been added.\n Please try another room number."
    } else {
      this.allRooms[this.roomNumberInput] = this.roomNumberInput;
      this.dupRoomWarning = '';
      this.boards[this.currentBoard] = [
        ...this.boards[this.currentBoard],
        this.roomNumberInput,
      ];
    }
    this.roomNumber.setValue('');
    return false;
  }

  /*This will sort the queens out of the current board list, and calculate the average number of queens per room. If there is a remainder on the average, it will be added as the second element in the averageQueens array.*/
  sortRooms(){
    var tempBoards: any[] = [[]]
    for(var i = 0; i < this.boards.length; i++) {
      this.boards[i].sort();
      tempBoards[i] = this.boards[i].slice();
    }

    for(let i = 0; i < tempBoards.length; i++) {
      for(let j=0; j < tempBoards[i].length; j++) {
        if(this.queens[tempBoards[i][j]]) {
          this.queenBoards = [...this.queenBoards, tempBoards[i][j]];
          tempBoards[i].splice(j,1);
          j--;
        }
      }
    }

    //adds the remainder of kings to the kings board
    for(var i=0; i < tempBoards.length; i++) {
      tempBoards[i].forEach((element: any) => {
        this.kingBoards = [...this.kingBoards, element]
      });
    }
    //gathering the total number of kings
    this.totalKings = this.kingBoards.length;
    this.totalQueens = this.queenBoards.length;

    //Gather the average number of kings
    this.averageKings[0] = Math.floor(this.totalKings / this.numberOfBoards);
    if(this.totalKings % this.numberOfBoards != 0){
      this.averageKings[1] = this.totalKings % this.numberOfBoards;
      this.averageKings[0]++;
    }
    //Gets the average number of queen rooms
    this.averageQueens[0] = Math.floor(this.totalQueens/this.numberOfBoards);
    if(this.totalQueens%this.numberOfBoards!==0){
      this.averageQueens[1] = this.totalQueens%this.numberOfBoards;
      this.averageQueens[0]++;
    }

    this.kingBoards.sort()
    this.queenBoards.sort()
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

  checkForChanges(){

    console.log("sorted before check:")
    console.log( this.sortedBoards)
    console.log("boards before check: ")
    console.log( this.boards)

    for(var i = 0; i < this.sortedBoards.length; i++){

      for(var j = 0; j < this.sortedBoards[i].length; j++) {
        var match = false;
        var k = 0;
        while(k < this.sortedBoards[i].length) {
          if(this.sortedBoards[i][k] == this.boards[i][j]) {
            match = true;
          }
          k++;
        }
        if(!match) {
          this.changes[i] = [...this.changes[i], this.sortedBoards[i][j]]
        }
      }
    }

    console.log("Changes:")
    console.log(this.changes)
  }

  sortBoards() {
    this.sortRooms();
    let c = 0;
    for(var i = 0; i < this.boards.length; i++) {
      for(var j = 0; j < this.averageKings[0]; j++) {
        // console.log("adding to sorted")
        this.sortedBoards[i] = [...this.sortedBoards[i], this.kingBoards[c]]
        c++;
      }
      this.averageKings[1]--;
      if(this.averageKings[1] == 0) {
        this.averageKings[0]--;
      }
    }
    c=0;
    for(var i = 0; i < this.boards.length; i++) {
      for(var j = 0; j < this.averageQueens[0]; j++) {
        // console.log("adding to sorted")
        this.sortedBoards[i] = [...this.sortedBoards[i], this.queenBoards[c]]
        c++;
      }
      this.averageQueens[1]--;
      if(this.averageQueens[1] == 0) {
        this.averageQueens[0]--;
      }
    }
    
    console.log("Sorted Boards")
    console.log(this.sortedBoards)
    this.checkForChanges()
    this.boards = this.sortedBoards.slice();
    //this.highlightQueens()
  }

  highlightQueens(){
    var queens = document.getElementsByClassName("room") 
    for(var i = 0; i  < queens.length; i++) {
      // console.log("looping")
      queens[i].className += "Queen";
    }
    // console.log(queens)
  }
}


/*  

My first attempt to sorting the boards

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
      while (this.queenBoards[this.currentBoard][0]===0) {
        if(this.queens[this.currentBoard].length < currentAverage && this.queenBoards[this.currentBoard+1].length == 0)
        {
          this.nextBoard();
          if(this.currentBoard == this.numberOfBoards - 1){

          }
        }
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
  }*/
