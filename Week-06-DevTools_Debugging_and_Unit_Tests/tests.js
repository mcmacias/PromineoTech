/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers (num1,num2) {
        return num1+num2;
     }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
})



describe('Question 1a: Sorted array of Numbers', () => {
  it('Should sort an array in ascening order', () => {
    const arrayOfNumbers = [1, 5, 3, 2, 4]
    arrayOfNumbers.sort((a, b) => a - b)

    expect(arrayOfNumbers[0]).to.equal(1);
    expect(arrayOfNumbers[1]).to.equal(2);
    expect(arrayOfNumbers[2]).to.equal(3);
    expect(arrayOfNumbers[3]).to.equal(4);
    expect(arrayOfNumbers[4]).to.equal(5);

    expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5]); 
    //use deep equal becuase it usually only compares 1 number. 
    //Deep equal tells it to compare each number by number
  })
})

describe('Quesrion 1b: Manage my wallet', () => {
  class Wallet {
    constructor(startingMoney) {
      this.money = startingMoney
    }
    addMoney(amount) {
      this.money += amount
    }
    removeMoney(amount) {
      this.money -= amount
    }
  }
  // const myWallet = new Wallet(100)
  // myWallet.removeMoney(14.99)
  // myWallet.addMoney(3)

  describe('addMoney', () => {
    it('should add money parameter to my wallet', () => {
      let myWallet = new Wallet(10);
      myWallet.addMoney(5);
      expect(myWallet.money).to.equal(15);
    })
  })
  describe('removeMoney', () => {
    it('should subtracet money parameter to my wallet', () => {
      let myWallet = new Wallet(10);
      myWallet.removeMoney(5)
      expect(myWallet.money).to.equal(5);
    })
  })
})

describe('1c:Day of the Week', () =>{
  const dayOfTheWeek = (num) => {
    let day = '';
    switch (num) {
      case 1:
        day = 'Monday'
        break;
      case 2:
        day = 'Tuesday'
        break;
      case 3:
        day = 'Wednesday'
        break;
      case 4:
        day = 'Thursday'
        break;
      case 5:
        day = 'Friday'
        break;
      case 6:
        day = 'Saturday'
        break;
      case 7:
        day = 'Sunday'
        break;
      default:
        // console.log('Err. Something went wrong.') //don't need this to check that the day value remains empty 
    }
    return day;
  }
  it('Should return day of the week that corresponds to number inputted', () =>{
    expect(dayOfTheWeek(1)).to.equal('Monday');
    expect(dayOfTheWeek(3)).to.equal('Wednesday');
    expect(dayOfTheWeek(6)).to.equal('Saturday');
    expect(dayOfTheWeek(8)).to.equal('');
  })
})

describe('1d: Is a wizard', () =>{
  const movieCharacters = [
    {
      name: 'Howl',
      isAWizard: true,
      quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
    },
    {
      name: 'Kalcifer',
      isAWizard: false,
      quote: `I don't cook! I'm a scary and powerful fire demon!`,
    },
  ]
  it('Should return name of wizard if true', () => {
    function onlyWizards(arrayOfCharacters) {
      let newArray = [];
      newArray = arrayOfCharacters.filter((character) => character.isAWizard == true);
      return newArray.length;
    }
    expect(onlyWizards(movieCharacters)).to.equal(1);

  })
})
