let newEntry = 0;

document.getElementById('add').addEventListener('click', () => {
    //need to add to table
    let table = document.getElementById('journal-list');
    let row = table.insertRow(1); //start at 1 b/c headersare 0
    // console.log(row);
    row.setAttribute('newEntry', newEntry++);
    // row.setAttribute('newEntry', newEntry++);
    //Date
    row.insertCell(0).innerHTML = document.getElementById('entry-date').value;
    
    // console.log(document.getElementById('entry-date').value);
    //Mood
    row.insertCell(1).innerHTML = document.getElementById('mood-entry').value;
    //Energy Level
    row.insertCell(2).innerHTML = document.getElementById('energy-level').value;
    //highlight
    row.insertCell(3).innerHTML = document.getElementById('highlight').value;
    //Entry
    row.insertCell(4).innerHTML = document.getElementById('new-entry').value;

    // table.appendChild(`entry-${newEntry}`);
    // table.appendChild(row);

});


