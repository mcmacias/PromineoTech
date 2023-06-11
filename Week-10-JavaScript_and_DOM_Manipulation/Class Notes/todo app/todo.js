//want each todo to have an id to be able to refer to it uniquely 
let id = 0;

//when clidk the create button, want it to create a new row and add it to the table
document.getElementById('add').addEventListener('click', () => {
    //this execute when the bitton is clicked
    let createdDate = new Date(); //new Date with no parameters in it will be current date
    let table = document.getElementById('list'); 
    //reference to our table based off the id
    let row = table.insertRow(1); //start at 1 becuase 0 is all row with all the headers
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; //lets us set the valuse of the first item in row
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    //want to append a button to show which id to delete. before adding this id is zero for all tasks becuause we haven't incremented it
    actions.appendChild(createDeleteButton(id++)); //createDeleteButton is a function we will create 
    document.getElementById('new-task').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    //add event listener. each will have own id 
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        // let elementToDelete = document.getElementById(`test-${id}`);
        //this is giving an error because it comes up as item-id, but we are trying to remove it as test-id
        //above we did label it as item-id (line 11)
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;

}