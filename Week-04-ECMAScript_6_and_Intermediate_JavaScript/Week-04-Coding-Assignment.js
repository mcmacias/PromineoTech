 console.log(`Question 1---------------------------------------`);
// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

//      1a.Programmatically subtract the value of the first element in the array from the 
//      value in the last element of the array.   
//          Do not use numbers to reference the last element, find it programmatically.
//          ages[7] – ages[0] is not allowed!
//      1b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
//          (works for arrays of different lengths).
//      1c. Use a loop to iterate through the array and calculate the average age. 

 let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
 console.log(ages);
 console.log(`Last number - first number: ${ages[ages.length - 1] - ages[0]}`);   //subract index(0) from length - 1

 ages.push(28);       
 console.log(`Added Number: ${ages}`);  //add another number and print out the array 
 console.log(`Last number - first number: ${ages[ages.length - 1] - ages[0]}`);


 let totalSum = 0;
 for(let i = 0; i < ages.length; i++){   //adding all values together, take averge outside of loop
    totalSum += ages[i];
    //console.log(totalSum);    //checking adding correctly
 }
 console.log(`Average: ${totalSum / ages.length}`);    //average

 console.log(`Question 2---------------------------------------`);
    // 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    // 2a. Use a loop to iterate through the array and calculate the average number of letters 
    //     per name. 
    // 2b. Use a loop to iterate through the array again and concatenate all the names 
    //     together, separated by spaces. 

 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
 console.log(names);    //print array

 totalLetters = 0;
 for(let i = 0; i < names.length; i++){     //for loop to collect number of letters
    //console.log(names[i].length);     //checking if this is how to get tring length
    totalLetters += names[i].length;
    //console.log(totalLetters);    //checking adding correctly
 } 
 console.log(`Average name length: ${totalLetters / names.length}`);

 let oneString = '';
 for(let i = 0; i < names.length; i++){     //for loop to concatenate names
    oneString += ' ' + names[i];
 } 
 console.log(`One string:${oneString}`);

 console.log(`Question 3---------------------------------------`);
 //  How do you access the last element of any array?
 console.log('The easiest way to access the last element of any array is using: array[array.length - 1]');
 console.log(`Question 4---------------------------------------`);
 // How do you access the first element of any array?
 console.log('The easiest way to access the first element of any array is using: array[0]');

 console.log(`Question 5---------------------------------------`);
    // Create a new array called nameLengths. Write a loop to iterate over the previously created 
    // names array and add the length of each name to the nameLengths array.
 let nameLengths = [];
 for(let i = 0; i < names.length - 1; i++){ //looping though names array
    nameLengths.push(names[i].length);  //push the lengh of each index of names to new array
    // console.log(nameLengths);   // checking working properly
 }
//  console.log(nameLengths);
 console.log(`Name Lengths Array: ${nameLengths}`);

 console.log(`Question 6---------------------------------------`);
    // Write a loop to iterate over the nameLengths array and calculate the sum of all the 
    // elements in the array.
 lengthSum = 0;     //new variable to store sum
 for(let i = 0; i < nameLengths.length; ++i){
    lengthSum += nameLengths[i];
    // console.log(lengthSum);     //checking adding at each index
 }
 console.log(`Sum of all names: ${lengthSum}`);

 console.log(`Question 7---------------------------------------`);
    // Write a function that takes two parameters, word and n, as arguments and returns the 
    // word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
    // I would expect the function to return ‘HelloHelloHello’).

 let concatNames = (word, n) => {
    a = '';
    for(let i = 0; i < n; i++){
        a += word;
        // console.log(word);
    }
    return a;
 }

 console.log(`Concatnated word: ${concatNames("Hello", 3)}`);

 console.log(`Question 8---------------------------------------`);
    // Write a function that takes two parameters, firstName and lastName, and returns a 
    // full name.  The full name should be the first and the last name separated by a space.
 let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

 console.log(`First Name, Last Name: ${fullName("ChangBin", "Seo")}`);
 //  fullName("ChangBin", "Seo"); originlly had console.log as return, but changed it to add to template literal 

 console.log(`Question 9---------------------------------------`);
    // Write a function that takes an array of numbers and returns true if the sum of all 
    // the numbers in the array is greater than 100.

 let addingNumbers = a => {
    sum = 0;
    for(i = 0; i < a.length; i++){  //add up all the numbers
        sum += a[i];
    }   
    if(sum > 100){  //if sum > 100 reutn true
        return true;
    }else{          //if < 100 will retunr false
        return false;
    }
 }

 numbersArray1 = [5, 20, 49, 19, 25, 3];
 numbersArray2 = [5, 20, 49, 19, 3];
  
 console.log(`Array 1: ${numbersArray1}`);
 console.log(`The sum of Array 1 greater than 100? ${addingNumbers(numbersArray1)}`);
 console.log(`Array 2: ${numbersArray2}`);
 console.log(`The sum of Array 2 greater than 100? ${addingNumbers(numbersArray2)}`);

 console.log(`Question 10---------------------------------------`);
    // Write a function that takes an array of numbers and returns the average of all the 
    // elements in the array.
 let takeAverage = a => {   //takes average of array a
    sum = 0;
    for(i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum/a.length;    //returns average
 }
 console.log(`Average of Array 1: ${takeAverage(numbersArray1)}`);
 console.log(`Average of Array 2: ${takeAverage(numbersArray2)}`); 

 console.log(`Question 11---------------------------------------`);
    // Write a function that takes two arrays of numbers and returns true if the average of 
    // the elements in the first array is greater than the average of the elements in the second 
    // array.
 let compareArrays = (a, b) => {
    if(takeAverage(a) > takeAverage(b)){
        return true;
    }else{
        return false;
    }
 }
 console.log(`Is the average of Array 1 > Array 2? ${compareArrays(numbersArray1, numbersArray2)}`);
 console.log(`Is the average of Array 2 > Array 1? ${compareArrays(numbersArray2, numbersArray1)}`);

 console.log(`Question 12---------------------------------------`);
    // Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
    // moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater 
    // than 10.50.

 let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
 }

 console.log(`If it is hot ouside and I have more than $10.50 I will buy drink.`);
 let yesHot = true;
 //  let noHot = false;  I relized I can use !yesHot to get a noHot answer
 let yesMoney = 11.00;
 let noMoney = 9.00;

 console.log(`It is hot outside? ${yesHot} 
 How much money do I have? $${yesMoney} 
 Can I buy a drink? ${willBuyDrink(yesHot, yesMoney)}`);

 console.log(`It is hot outside? ${!yesHot} 
 How much money do I have? $${yesMoney} 
 Can I buy a drink? ${willBuyDrink(!yesHot, yesMoney)}`);

 console.log(`It is hot outside? ${yesHot} 
 How much money do I have? $${noMoney} 
 Can I buy a drink? ${willBuyDrink(yesHot, noMoney)}`);

 console.log(`Question 13---------------------------------------`);
    // Create a function of your own that solves a problem. 
    // should I go watch a movie? 
    // if have moeny & time yes at theatre
    // if have no money but time yes at home 

 let watchAMovie = (haveMoney, haveTime) => {
    if(haveMoney > 20 && haveTime == true){ //if both can go to theater
        return `I can go to the movie theater!`;
    }else if(haveTime == true){ //if nomoney can watch at home
        return `I can watch a movie, but at home`;
    }else{  //no time can't watch one 
        return `I have no time for that`;
    }
 }
 console.log(`My problem: I want to watch a movie.
 I don't know if I should go to the theatre or watch one at home.
 If I have money, over $20, I will go to the theatre.
 If I don't have time I won't watch a movie.`);

 yesMoney = 25;
 let yesTime = true;

 console.log(`I have $25 and time: ${watchAMovie(yesMoney, yesTime)}`);
 console.log(`I have $9 and time: ${watchAMovie(noMoney, yesTime)}`);
 console.log(`I have $25 but no time: ${watchAMovie(yesMoney, !yesTime)}`);
 console.log(`I have $9 and no time: ${watchAMovie(noMoney, !yesTime)}`);

