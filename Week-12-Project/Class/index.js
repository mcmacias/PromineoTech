class House {   //creating a class for the house, out main component of the app
    constructor(name){
        this.name = name;
        //each house is going to have a bunch of rooms so add that as an array
        this.rooms = [];
        //this is all the house is going to have
    }
    //method to be able to add a room
    addRoom(name, area){
        this.rooms.push(new Room(name, area));
        //this will add new rooms to the array in house that already exsists
    }
}

class Room {  //each house is going to have rooms, make a class to describe them
    constructor(name, area){
        this.name = name;
        this.area = area;
    }
}

// now we are going to create the Service, how we recieve the HTML request
class HouseService{
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses' //static variable only used within the class
    //here creating all our methods to send requests 
    //getting houses, getting specific house, cresting a house, updating a house, deleting a house
    static getAllHouses() { //doesn't need parameters becuase grabbing all our information 
        return $.get(this.url);
    }

    static getHouse(id){ //this will get specifically one house in our data based off the ID
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house){ //take a house; ie takes an instance of our house class
        //thus house will have a name and an array (of rooms)
        //we want to post this to our API so we will return the posting to the api
        return $.post(this,url, house);
    }
    //reason we are returning all of these is we will be using all these methods somewhere else
    //and we want to be able to handle the returns that come back wherever we use them

    static updateHouse (id){
        return $.ajax({
            url: this.url + `/${house._id}`, //it is _iu becuase that is the value the url will automatically create for the house
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteHouse(id){
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}

//all of the above was just categorizing and creating the structure of the methods we will use 
//now we'll write the harder part the interactswith the DOM and HTML

class DOMManager {
    static houses; //houses will reprsent all the houses in the class

    static getAllHouses(){ //this will get all houses from the service and render to DOM
        HouseService.getAllHouses().then(houses => this.render(houses));
    }

    //render funtion that grabs the house information
    static render(houses){ //want to take a list of houses and render(display) them on the DOM
        this.houses = houses;
        $('.app').empty();   //app is the div we set aside to display our houses (HTML)
        //always want to clear when 
        //wewant a for loop to go through our houses
        for(let house of houses){
            $('.app').prepend(
                `<div id="${house._id}" class="card">
                    <div class="card-header">
                        <h2>${house.name}</h2>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm">
                                <input type="text" id="${house._id}-room-name" class="form-control" placeholder="Room Name">
                            </div>
                            <div class="col-sm">
                                <input type="text" id="${house._id}-room-area" class="form-control" placeholder="Room Area">                           
                            </div>
                        </div>
                        <button id="${house._id}-new-room" onclick."DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control">Add</button>
                    </div>
                </div><br>  `
            );
            for (let room of house.rooms){
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                        <span id="name-${room._id}"><strong>Name: </strong> ${room.name}</span>'
                        <span id="area-${room._id}"><strong>Name: </strong> ${room.area}</span>'
                        <button class="btn btn-danger" onclick."DOMManager.deleteRoom('${house._id}', '${room._id}')">Delete Room</button>
                    `
                )
            }
        }
    }

}

DOMManager.getAllHouses();
