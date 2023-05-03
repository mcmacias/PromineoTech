class Player {
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
    describe(){
        return `${this.name} plays ${this.position}.`;
    }
}
class Team {
    constructor(name){
        this.name = name;
        this.players = []; // blnk array that adds members to the array if they are a part of the team 
    }
    addPlayer(player){
        if(player instanceof Player){   //this way we make sure an actuall player is being added and not just random string or umber
            this.players.push(player);
        }else{
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }
    describe(){
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor(){
        this.teams = [];
        this.selectedTeam = null;
    }
    start(){ //top down method, using and calling names of methods that don't exist yet but will make
        let selection = this.ShowMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createATeam();
                    break;
                case'2':
                    this.viewTeam();
                    break;
                case'3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayAllTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.ShowMainMenuOptions();
        }
        alert('Goodbye!');
    }
    //here we will start implementing the different functions we want to call on
    ShowMainMenuOptions(){ //first one will display the emnu and based on what is chosen the next one will run
        return prompt(`
         0) Exit 
         1) Create New Team
         2) View Team
         3) Delete Team
         4) Display All Teams
        `);
    } 

    showTeamMenuOptions(teamInfo){
        return prompt(`
            0) Back
            1) Create Player 
            2) Delete Player
            ----------------------
            ${teamInfo}
        `);
    }

    displayAllTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; ++i){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createATeam(){
        let name = prompt('Enter name for new team: ');
        this.teams.push(new Team(name));
    }

    viewTeam(){
        let index = prompt('Enter index of team you wish to view.');
        if(index > -1 && index < this.teams.length){    //validating input, making sure the number entered is a team number
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for(let i = 0; i < this.selectedTeam.players.length; i++){
                description += i + ') ' + this.selectedTeam.players[i].name 
                    + ' - ' + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
                    break;
            }
        }
    }

    deleteTeam(){
        let index = prompt("Enter the index of the team you wish to delete: ");
        if(index > -1 && index < this.teams.length){
            this.teams.splice(index, 1);
        }
    }

    createPlayer(){
        let name = prompt("Enter name for new player: ");
        let position = prompt('Enter position for new player: ');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Enter the index of the player you wish to delete: ');
        if(index > -1 && index < this.selectedTeam.players.length){
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
