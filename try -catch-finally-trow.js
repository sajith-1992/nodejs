var read=require("readline-sync")
var take= read.question("enter a value").jkas
try{
    
    if (take>5){
        console.log("try is working")
    
    
    }
    else{
        throw"this is lessthan 5"
    }
}

catch (error){
    console.log (error)
}
    

finally{

    console.log("i need to work always")
}