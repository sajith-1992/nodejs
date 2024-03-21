function longTask(miliseconds){
    var dt= new Date()

    while((new Date()-dt)<=miliseconds){

    }
}
console.log("start")
longTask(3000)
console.log("stop")