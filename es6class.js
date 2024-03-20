class hello{
    constructor(name,palce,age){
            this.name=name
            this.palce=palce
            this.age=age



    }
    display(){
        console.log("name"+this.name)
    }
}

var name = new hello("sajith","mohan",12)
var hey = new hello("bindiya","pavam",27)
console.log(hey)
console.log(name)
name.display()