class Clock {
    constructor() {
        // 1. Create a Date object.
        let date = new Date;
        
        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.  
        
        setInterval(this._tick.bind(this), 1000 );
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        document.querySelector("#clock").innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    _tick() {
        // 1. Increment the time by one second.
        if(this.seconds < 59) {
            this.seconds++;
        } else if(this.minutes < 59) {
            this.minutes++;
            this.seconds = 0;
        } else if(this.hours < 23) {
            this.hours++;
            this.minutes = 0;
            this.seconds = 0;
        } else {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
        
        // 2. Call printTime.
        this.printTime();
    }
}

// const clock = new Clock();
// let x = document.querySelector("#clock").innerHTML = clock.printTime();















// const readline = require('readline');

// const reader = readline.createInterface({
//     // it's okay if this part is magic; it just says that we want to
//     // 1. output the prompt to the standard output (console)
//     // 2. read input from the standard input (again, console)

//     input: process.stdin,
//     output: process.stdout
// });
// reader.question("What is your name? ", (sum, numsLeft));


// let totalsum = 0;

function addNumbers(sum, numsLeft, completionCallback) {
    
    let i = 0;
    totalsum += sum;

    function LoopTimes () {
        if (i < numsLeft) {
            i++; 
            promptUserForNumber(LoopTimes);
        } else {
            completionCallback();
            return;
        }
    }
    LoopTimes();
    console.log('I am here');
}


function promptUserForNumber (callback) {
    reader.question("Enter a number: ", function (number) {
        totalsum += parseInt(number);
        console.log(number);
        callback()
    })
}

function completionCallback () {
    console.log(`All done! Total Sum: ${totalsum}`);
    reader.close();
}

// addNumbers(0, 3, completionCallback);
// console.log("I am outside");

// reader.question("What is your name? ", function (answer) {
//     console.log(`Hello ${answer}!`);
//     reader.close();
//     console.log('reader has closed');
// });











const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the

    reader.question(`Is ${el1} greater than ${el2}? `, function (answer) {
        if(answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
        // reader.close();
    });
    // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], (bool) => { 
            if(bool){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps || bool, outerBubbleSortLoop);
        });
    }
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if(madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }

        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    outerBubbleSortLoop(true);
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});
console.log("I'm first!");