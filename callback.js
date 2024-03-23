function hello(data){
    console.log("data:"+data)
}

function hey(callback){
    callback("crossroad")
}
hey(hello)