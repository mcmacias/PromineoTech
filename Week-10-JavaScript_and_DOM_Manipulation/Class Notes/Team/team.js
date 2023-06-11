let paragraphID = 0;

document.getElementById('p-button').addEventListener('click', () => {
    //Locate the parent
    let parent = document.getElementById('p-div');

    //create a new element
    let newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('p-input').value;
    newElement.setAttribute('id', paragraphID++);

    //attach to parent
    parent.appendChild(newElement);

    //clear box
    document.getElementById('p-input').value = '';
});