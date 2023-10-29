

const orderPizza=(callback)=>{
    setTimeout(() => {
        console.log("Pizaa Ordered");
        message2="Pizza Ready";
        callback(message2);
    }, 3000);

}

const pizaaReady=(pizza)=>
{
    console.log(pizza);
}


orderPizza(pizaaReady);





