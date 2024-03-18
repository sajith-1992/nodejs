function hello(name,place,age){
    this.name=name
    this.place=place
    this.age=age
    this.display=function(){
        console.log("name : "+this.name+"place :"+this.place)
    this.show=function(){
        console.log(this.name +"and"+this.age)
    }
    }

}


var hey = new hello("sajith","thrissur",1)


var hoi = new hello("abi","kannur",45)

hey.display()
hoi.display()
hey.show()
hoi.show()



