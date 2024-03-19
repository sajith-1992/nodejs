function person(name,place,gender){
    this.name=name
    this.place=place
    this.gender=gender
    this.hey=function(){
    console.log("name: "+this.name + "palce "+this.place+" gender "+this.gender)
}
    
}

var hello = new person("sajith","thrissur","male")
var hoi  =  new person("abi","kannur","still finding")

hello.display=function(){
    console.log("hai this is from display function"+this.name)
}

hello.display()

