//in here want to write what we expect the code/fucntion to do
//in test.html want to write all the head, body  and run mocha there 
let expect = chai.expect;

describe('MyFunction', function(){
    describe('#Winner', function(){
        const testGame = new Game;
        it('should compare the 2 parameters', function(){
            expect(function(){
                testGame.start().winner(20, 5);
            }).to.equal(`FIRST PLAYER WINS! CONGRATULATIONS!`);
        });
        it('should compare the 2 parameters', function(){
            expect(function(){
                testGame.start().winner(5, 20);
            }).to.equal(`SECOND PLAYER WINS! CONGRATULATIONS!`);
        });
        it('should compare the 2 parameters', function(){
            expect(function(){
                testGame.start().winner(13, 13);
            }).to.equal(`A tie? That's weird...who cheated?`);
        });
    });
});