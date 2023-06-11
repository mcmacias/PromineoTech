// Finding Elemenets in DOM
// first way to find elements id by ID 
// use get elemenet by ID with the ID of the element you want to grab
    //want to pass the ID as a string matching the id used 
// when logged out it appears as a regular button

// let button = document.getElementById('my-button');
// console.log(button);

//next way is by tag name typially by opening and closing tag but some elements only have one tag
//similar as above, but want to use by tag name and pass the tag name as a string
//when consolelog get a collection in the console that shows all of the elements with this tage, in this case 5

// let buttonsByTag = document.getElementsByTagName('button');
// console.log(buttonsByTag);

//can also use classes to find elements (name plural because usually refer to many whereas in ID usually refer to just one)
//similar as above
//in this case only have 2 buttons with a class so get a collection of array swith only 2 entries

// let buttonsByClass = document.getElementsByClassName('my-class');
// console.log(buttonsByClass);


//Finding elements by css selectors/locators
//can do it similar to how we describe elements when we are trying to modify them in css
//so we would use a . between each description (in this case between tag and class)
//in this case only buttons under my class are in the collection
// let buttonsCSSSelector = document.querySelectorAll('button.my-class');
// console.log(buttonsCSSSelector);

//removing buttons (keeping the . though!) gives us all items under my-class in the collection
//(including the 'Hello world')
// let buttonsCSSSelector2 = document.querySelectorAll('.my-class');
// console.log(buttonsCSSSelector2);



// How to interact with DOM using javascript
// document.getElementById('content').innerHTML = 'Goodbye.'; //innerHTML is content inside, in this case the text hello.

let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {            //add event takes 2 paramenters (action and then function you want it to do)
    if(content.innerHTML == 'Goodbye.'){
        content.innerHTML = 'Hello.';
    }else{
        content.innerHTML = 'Goodbye.';
    }
});


//how to remove elements all together 
//above createda variable to get element then did event listener
//here just adding event listener to the get element tag
document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elemenetToRemove = document.getElementById(idToRemove);
    content.parentNode.removeChild(elemenetToRemove);
    document.getElementById('remove-id').value= '';
    //use child(content) to find parent(parentNode) to remover child(remover child(content))
});


let id = 0;


//adding elements to DOM (process more intensive, but straight forward) 
//finding parent 
//creating new element in JS
//setting up element w/ any attributes want
//appending new element as a child o the parent 

// document.getElementById('add').addEventListener('click', () =>{
//     var parent = document.getElementById('paragraph'); //ID of our DIV
//     var newElement = document.createElement('p'); //tag name of the element that is being created (we are creating a paragraph)
//     newElement.innerHTML = 'this is a new paragraph';
//     parent.appendChild(newElement);
// });

//in control of what these new paragraphs say 
document.getElementById('add').addEventListener('click', () =>{
    var parent = document.getElementById('paragraph'); //ID of our DIV
    var newElement = document.createElement('p'); //tag name of the element that is being created (we are creating a paragraph)
    newElement.innerHTML = document.getElementById('new-text').value; //CHANGE THIS!!
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    //to clear test in box after adding
    document.getElementById('new-text').value = '';
});

//to remove a specific paragraph that we have added need to assign an id to it
//atm there is no id associated to it and need that to remove it 
//all this in get remove id*************************************