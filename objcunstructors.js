var person ={
    name:"sajith",
    age:35,
    place:"thrissur",
    display:function(){
        console.log("its "+this.name+"my age is  "+this.age+this.place    ) 
      
       
    }}



person.dob="10-12-2006"

//person.show = function(){
//console.log()
//}
person.show=function(){
    console.log(this.display())
        
    }
console.log(person.show())



