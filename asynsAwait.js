function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("DATA,DATA,BETA");
        }, 1000);
    })
}


async function asyncData(){
    const ourData=await getData();
    console.log(ourData);
}


asyncData();