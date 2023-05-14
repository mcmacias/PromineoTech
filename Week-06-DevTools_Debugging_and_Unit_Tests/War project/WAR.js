// const chai = require("chai");
// const assert = chai.assert;
// const expect = chai.expect;

// describe('Card', () => {
//     describe('#Constructor', () => {
//         it('should take a number, name, and suit', (done) => {
//             let card = new Card(1, 'A', 'spades ♠️');
//             expect(card.number) = 1;
//             expect(card.name) = 'A';
//             expect(card.suit) = 'spades ♠️';

//             done();
            
//         });
//     });
// });


class Card{ //each card needs a number & suit (spade, heart, clubs, spade)
    constructor(number, name, suit){
        this.number = number; //for comparison 
        this.name = name; 
        this.suit = suit;
    }
    describe(){
        return `${this.name} of ${this.suit}`; 

    }
}
class Deck{ // deck needs all numbers & suits, one of each
    constructor(){
        this.deckArray = [];
        this.suitsArray = ['spades ♠️', 'hearts ♥️', 'clubs ♣️', 'diamonds ♦️'];
        this.namesArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    }

    createDeck(){   //fills in suit and name to deck array, adding to cards class
        for(let i = 0; i < this.suitsArray.length; i++){
            for(let n = 0; n < this.namesArray.length; n++){
                this.deckArray.push(new Card((n+2), this.namesArray[n], this.suitsArray[i]));
            }
        }
    }
}

// class Player{   //2 players - each player needs half the deck 
//     constructor(){

//     }
// }

//game: want to start by splitting cards between each person (2) (new array for each person)
// want to compare one card at a time from front of the array (while array is not empty?)
// whichever if bigger gets one point (need a value to store these points)
    // want to display the cards, mark who wins, and keep tally of score 
// once done compare scores and announce the winner 

class Game{
    constructor(){
        this.array1 = [];
        this.array2 = [];
        this.person1Score = 0;
        this.person2Score = 0;
    }
    
    start(){ //create deck and split cards (shuffled) between each person 
        const thisDeck = new Deck;
        thisDeck.createDeck();
        let newArray = (thisDeck.deckArray); //make sure deck array filled
        // console.log(`this is newArray`)
        // console.log(newArray); //check
        this.randomize(newArray);   // randomize newarray
        
        this.splitCards(newArray);  // split to arrya1 and array2
        
        this.compareCards(this.array1, this.array2);    //compare arrays

        console.log(`Player 1 Score: ${this.person1Score} \nPlayer 2 Score: ${this.person2Score}`);

        this.winner(this.person1Score, this.person2Score);  //compare scores
    }

    randomize(array){ //randomizes the deck
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1)); //j is a random index in this deck
            // console.log(`this is J ${j}. This is I ${i}.`)
            // console.log(array)
            // [array[i], array[j]] = [array[j], array[i]];
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            // console.log(array);
        }
        // console.log(`this is inside randomize`);
        // console.log(array)
        return array;
    }

    splitCards(array){
        for(let i = 0; i < array.length/2; i++){
            this.array1.push(array[i]);  //add first half of newArray to array1
        }
        // console.log(this.array1);    //good to go
        
        for(let j = array.length/2; j < array.length; j++){
            this.array2.push(array[j]);  //add second half of newArray to array2
        }
        // console.log(this.array2);    //good with exact second half
    }
    
    compareCards(firstArray, secondArray){ //pull card from front of deck & compare/add point to whoever wins
        
        
        for(let i = 0; i < firstArray.length; i++){
            if(firstArray[i].number > secondArray[i].number){
                this.person1Score += 1; //if number value of first > second add to first
            }
            else if(secondArray[i].number > firstArray[i].number){
                this.person2Score += 1; //if nuber value of second > first add to second
            }else{ // just for refernece how many are tied
                console.log(`${firstArray[i].number} equals ${secondArray[i].number}. A tie this round!`);
            }
        }
        // console.log(this.person1Score);
        // console.log(this.person2Score);
    }

    winner(firstScore, secondScore){ // compare scores and show who won 
        if(firstScore > secondScore){
            console.log(`FIRST PLAYER WINS! CONGRATULATIONS!`);
        }else if(secondScore > firstScore){
            console.log(`SECOND PLAYER WINS! CONGRATULATIONS!`);
        }else{
            console.log(`A tie? That's weird...who cheated?`);
        }
    }
}

const startGame = new Game();
startGame.start();
