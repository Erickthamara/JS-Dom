var nums=[0,1,2,3,4,5]

var myArray=(num)=>{
    if (num%2===0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    };

}

//nums.map(myArray);


var myString="I love Nairobi";

var newString=myString.split(" ");

console.log(newString[newString.length -1 ]);
