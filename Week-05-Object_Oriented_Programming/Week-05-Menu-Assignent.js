// Job sites list
// class: Jobs
//     collects name & location date to be done
class Job{      //this class will take in the name and location of the job
    constructor(name, location, date){
        this.name = name;   //set parameters to each variable
        this.location = location;
        this.date = date;
    }
    details(){  //will desplay details of each job 
        // let stringArray = date.split('/');
        return `${this.name} is lcoated at ${this.location}
            Needs to be done by ${this.date}`;
    }
}

// let firstJob = new Job('SB Vac', 'San Diego');   //tested out, works fine 
// console.log(`${firstJob.details()}`);

// class: menubar 
//     array for list of Jobs
//     start(): switch class for 1: add job 2: delete job 3: list all Jobs
//     add job: make new class instance 
//         Enter name of Job (add to array)
//         enter location 
//     delete job: 
//         get index of job to delete 
//         Ssplice(index, 1);
//     list all jobs:
//         display array of jobs 
//         can select a job to look at details (job and location) 

class MenuBar{
    constructor(){
        this.jobArray = [];
    }
    start(){
        let userInput = this.MenuOptions(); //shows menu option & gets input
        while(userInput != 0){
            switch(userInput){  //the three menu options I have 
                case '1':
                    this.NewJob();
                    break;
                case '2':
                    this.DeleteJob();
                    break;
                case '3':
                    this.DisplayJobs();
                    break;
                default:
                    userInput = 0;
            }
            userInput = this.MenuOptions();
        }
        alert('Have a good day!');
    }

    MenuOptions(){
        return prompt(`
         0) Exit 
         1) Create New Job
         2) Delete A Job
         3) Display All Jobs
        `);
    }

    NewJob(){
        let jobName = prompt(`Enter job name: `);   //get input for name & Location
        let jobLocation = prompt(`Enter job city: `);
        let jobDate = prompt('Enter date jobe needs to be done by (MM/DD): ');
        // let newJob = new Job(this.jobName, this.jobLocation); //create a new job class instance
        this.jobArray.push(new Job(jobName, jobLocation, jobDate));    //add to array as well
    }

    DeleteJob(){
        let i = prompt(`Input index of job to delete: `);
        this.jobArray.splice(i, 1); //splice out deleted job
    }

    DisplayJobs(){
        let jobString = ''; //new string to hold the names to display
        // let nameString = ''; //my display wasn't outputting right so I had to check if it was all wrong or just display
        for(let i = 0; i < this.jobArray.length; ++i){
            jobString += i + ') ' + this.jobArray[i].details() + '\n';
            // nameString += i + ') ' + this.jobArray[i].name + '\n'
        }
        alert(jobString);
        // alert(nameString);
    }
}

let menu = new MenuBar();
menu.start();