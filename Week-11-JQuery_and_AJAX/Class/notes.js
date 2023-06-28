// // console.log($('body'));
// // inJquery you can pass in selecotr by just using $('') with the name of the selector in the quotes

// let p = $('#test'); //Grabbing element by ID (using a #)
// let div = $('.myClass'); //grabbing element by class (using a .)
// let ul = $('ul') //just grabbing the element (just needthe name)

// console.log(p);
// console.log(div);
// console.log(ul);

// console.log(p.text());    //
// p.text('New Text');

// $('input').attr('placeholder', 'Placeholder text');   //takes 2 parameters, placeholder and thevalue

// div.prepend('<p>Prepended paragraph</p>');
// div.append('<p>Appended paragraph</p>');

// div.before('<p>paragraph added before the div</p>');
// div.after('<p>paragraph added after the div</p>');

// //remove deletes the element and all the children, 
// empty keeps the element but removes everything inside that element (children of that element)
// div.empty(); //div still exsists but it has no paragraphs now
// ul.remove(); //list is copletely removed, tag and all

// $('input').hide();
// setTimeout(() => $('input').show(), 2000); //2000 is 2 seconds 
// hide and show, someties we want to hide certain elements and we can do that usine hide
// show will make that information reappear 

$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users', {
    name:'Tommy',
    job: 'Front End SoftwareDeveloper'
}, (data) => console.log(data));

// AJAX helps us bring in inputs without having to reload the whole page for every input recieved 


