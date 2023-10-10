

const orderPizza=(callback)=>{
    setTimeout(() => {
        message1="Pizaa Ordered";
        message2="Pizza Ready";
        callback(message2);
    }, 3000);

}

const pizaaReady=(pizza)=>
{
    console.log(pizza);
}


orderPizza(pizaaReady);





