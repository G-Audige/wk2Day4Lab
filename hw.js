// 1.   Write a function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

// function grade(x){
//     let score = x
//     let comment

//     if(score >= 80){
//         comment = "You did a good job."
//     }
//     else if(score >= 70){
//         comment = "Keep trying."
//     }
//     else if(score >= 60){
//         comment = "Ehhhh."
//     }
//     else if(score >= 55){
//         comment = "Not too good."
//     }
//     else{
//         comment = "Bad grade, but you'll get em next time."
//     }

//     return comment
// }

// console.log(grade(67))


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// function multiples(x){
//     let input = x
//     for(i = 0; i <= x; i += 10){
//         console.log(i)
//     }
// }

// console.log(multiples(69))


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

// function quarters(x,y){
//     let bill = x
//     let price = y
//     let change = bill - price
//     let quarts = 0

//     while (change >= 0.25){
//         quarts += 1
//         change -= 0.25
//     }

//     return quarts
    
// }

// console.log(quarters(20, 6))


//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paid and amount cost

function change(x,y){
    let remainder = x - y
    const report = []
    let dollar100 = 0
    while(remainder >= 100){
        dollar100 += 1
        remainder - 100
        if(remainder < 100){
            report.push("100 dollar bills:",dollar100)
        }
    }
    let dollar50 = 0
    while(remainder <= 50){
        dollar50 += 1
        remainder - 50
        if(remainder < 50){
            report.push("50 dollar bills:",dollar50)
        }
    }
    let dollar20 = 0
    while(remainder <= 20){
        dollar50 += 1
        remainder - 20
        if(remainder < 20){
            report.push("20 dollar bills:",dollar20)
        }
    }
    let dollar10 = 10
    while(remainder <= 10){
        dollar50 += 1
        remainder - 10
        if(remainder < 10){
            report.push("10 dollar bills:",dollar10)
        }
    }
    let dollar5 = 0
    while(remainder <= 5){
        dollar5 += 1
        remainder - 5
        if(remainder < 5){
            report.push("5 dollar bills:",dollar5)
        }
    }
    let dollar1 = 0
    while(remainder <= 1){
        dollar1 += 1
        remainder - 1
        if(remainder < 1){
            report.push("1 dollar bills:",dollar1)
        }
    }
    let cent25 = 0
    while(remainder <= 0.25){
        cent25 += 1
        remainder - 0.25
        if(remainder < 0.25){
            report.push("Quarters:",cent25)
        }
    }
    let cent10 = 0
    while(remainder <= 0.1){
        dollar50 += 1
        remainder - 0.1
        if(remainder < 0.1){
            report.push("Dimes:",cent10)
        }
    }
    let cent5 = 0
    while(remainder <= 0.05){
        dollar50 += 1
        remainder - 0.05
        if(remainder < 0.05){
            report.push("Nickles:",cent5)
        }
    }
    let cent1 = 0
    while(remainder <= 0.01){
        dollar50 += 1
        remainder - 0.01
        if(remainder < 0.01){
            report.push("Pennies:",cent1)
        }
    }

    return report
    
}

console.log(change(100,100))


// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
