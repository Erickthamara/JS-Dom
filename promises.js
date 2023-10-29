function getWeather(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Sunny");
        }, 1000);
         
    })
}

function greetings(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if (data=="Sunny") {
                resolve("GOOD MORNING");
                
            } else  {
                reject("Error Not Found!!");
            }
        }, 1000);
        
    })
    
}

function onSuccess(data){
    console.log(`Success: ${data}`);
}

function onFailure(error){
    console.log(`Failure: ${error}`);
}

getWeather()
    .then(greetings)
        .then(onSuccess)
            .catch(onFailure);