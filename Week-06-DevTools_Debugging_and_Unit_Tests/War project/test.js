//in here want to write what we expect the code/fucntion to do
//in test.html want to write all the head, body  and run mocha there 
// const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

// describe('Winner', () => {
//     describe('#Winner', () => {
//         const testGame = new Game;
//         it('should compare the 2 parameters', function(){
//             expect(function(){
//                 testGame.start().winner(20, 5);
//             }).to.equal(`FIRST PLAYER WINS! CONGRATULATIONS!`);
//         });
//         it('should compare the 2 parameters', function(){
//             expect(function(){
//                 testGame.start().winner(5, 20);
//             }).to.equal(`SECOND PLAYER WINS! CONGRATULATIONS!`);
//         });
//         it('should compare the 2 parameters', function(){
//             expect(function(){
//                 testGame.start().winner(13, 13);
//             }).to.equal(`A tie? That's weird...who cheated?`);
//         });
//     });
// });

describe('Card', () => {
    describe('#Constructor', () => {
        it('should take a number, name, and suit', (done) => {
            let card = new Card(1, 'A', 'spades ♠️');
            expect(card.number).to.equal(1);
            expect(card.name).to.equal('A');
            expect(card.suit).to.equal('spades ♠️');

            done();
            
        });
    });
});