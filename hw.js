// 1.   (Complete) Write a function that contains an if/else statement for the following requirements:
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

// console.log(grade(77))


// 2.   (Complete) Write a function that prints out multiples of 10 up to a given input (argument)

// function multiples(x){
//     if(x >= 10)
//     for(let i = 1; i < x; i++){
//         if(i % 10 == 0 && x - i <= 10){
//             return i
//         }
//         else if(i % 10 == 0 )
//         console.log(i)
//     }
//     else
//     return "Null"
// }

// console.log(multiples(66))


// 3.   (Complete) Write a function that takes bill amount and item price and says how many quarters they'd get in return

// function quarters(bill, price){
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

// function change(x,y){
//     let remainder = x - y
//     let output = 0
//     let outputArray = []
//     while(remainder >= 100){
//      output += 1
//         remainder -= 100
//         if (output >= 1 && remainder < 100){
//             // console.log("100 dollar bills:" + output)
//             outputArray.push("100 dollar bills:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 50){
//         output += 1
//         remainder -= 50
//         if(output >= 1 && remainder < 50){
//             // console.log("50 dollar bills:",output)
//             outputArray.push("50 dollar bills:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 20){
//         output += 1
//         remainder -= 20
//         if(output >= 1 && remainder < 20){
//             // console.log("20 dollar bills:",output)
//             outputArray.push("20 dollar bills:" + output)
//         }
//     }
//     output = 10
//     while(remainder >= 10){
//         output += 1
//         remainder -= 10
//         if(output >= 1 && remainder < 10){
//             // console.log("10 dollar bills:",output)
//             outputArray.push("10 dollar bills:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 5){
//         output += 1
//         remainder -= 5
//         if(output >= 1 && remainder < 5){
//             // console.log("5 dollar bills:",output)
//             outputArray.push("5 dollar bills:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 1){
//         output += 1
//         remainder -= 1
//         if(output >= 1 && remainder < 1){
//             // console.log("1 dollar bills:",output)
//             outputArray.push("1 dollar bills:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 0.25){
//         output += 1
//         remainder -= 0.25
//         if(output >= 1 && remainder < 0.25){
//             // console.log("Quarters:",output)
//             outputArray.push("Quarters:" + output)
//         }   
//     }
//     output = 0
//     while(remainder >= 0.1){
//         output += 1
//         remainder -= 0.1
//         if(output < 0.1 && remainder < 0.1){
//             // console.log("Dimes:",output)
//             outputArray.push("Dimes:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 0.05){
//         output += 1
//         remainder -= 0.05
//         if(output >= 1 && remainder < 0.05){
//             // console.log("Nickles:",output)
//             outputArray.push("Quarters:" + output)
//         }
//     }
//     output = 0
//     while(remainder >= 0.01){
//         output += 1
//         remainder -= 0.01
//         if(output >= 1 && remainder < 0.01){
//             // console.log("Pennies:",output)
//             outputArray.push("Pennies:" + output)
//         }
//     } 

//     return outputArray
// }

// console.log(change(252.78,100))


// 5.   (Complete) Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 5 == 0){
//         console.log("Buzz")
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz")
//     }
//     else{
//         console.log(i)
//     }
// }
