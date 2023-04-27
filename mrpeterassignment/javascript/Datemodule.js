let dices = [1, 2, 3, 4, 5, 6]
let newVal = Math.floor(Math.random()*dices.length);

let val = dices[newVal];

console.log(val);

switch (val) {
    case 1 : {
        console.log("Poor Roll");
        break;
    }
    case 2: { 
        console.log("Not bad");
        break;
    }
    case 3: { 
        console.log("Good");
        break;
    } case 4: { 
        console.log("Excellent");
        break;
    }
    case 5: { 
        console.log("Bravo");
        break;
    }
    default: { 
        console.log("Wow");
        break;
    }
}