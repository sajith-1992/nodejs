class sampleHello{
    displayHello(){
        console.log("its working")
    }
}

class hello extends sampleHello {
    
    constructor(name,palce,age){
            super()
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
hey.displayHello()