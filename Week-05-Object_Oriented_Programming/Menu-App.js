class Player {
    constructor(name, position){
        this.nsme = name;
        this.position = position;
    }
    describe(){
        return `${this.name} plays ${this.position}.`;
    }
}
console.log(`Ok this wokrs!`);