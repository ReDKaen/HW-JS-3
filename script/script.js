let enterNumber = prompt("Enter Number");
let logNumber = parseInt(enterNumber);

if(!isNaN(logNumber)){
    let found = false;

    for(let i = 0 ; i <=logNumber; i++){
        if(i%5===0){
            console.log(i)
            found=true
        }
    }
} else {
    console.log("Sorry, no numbers")
}

