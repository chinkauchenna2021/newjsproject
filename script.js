// Datatypes / primitives 

// String = ""
// numbers = 1000
// name = 'James'
// isOpen = false

// console.log(typeof name )
// console.log(typeof numbers)
// console.log(typeof isOpen)
// console.log(typeof empty)

// age = '12' 
// console.log(typeof age)

// variables 

// var age = 20 


// let newLetAge = 30
// newLetAge = 100
// newLetAge = 2000

// const newConstAge = 40
// newConstAge = 100
// console.log(newLetAge)
// console.log(newConstAge)
// console.log(age)


// NAMING CONVENTIONS/ CASES
// PASCAL 
// CAMEL 

// let smalldigitnumber = 0.5
// let smallDigitNumber = 0.5
// smallnumber = 0.5
// // pascal 
// SmallNumber = 0.5

// let smallnumber = 0.5 
// let small_number = 0.5 
// let small.number = 0.5
// let small+number = 0.5
// let 2smallnumber = 0.5
// let smallnumber_2 = 0.5 
// let smallnumber2 = 0.5

// ouput and input methods 

// console
// console.log("Hello from the browser console!")
// console.table({name:'james',age:20})
// console.error("This is an error message!")
// a = 30 
// b = 30
// console.assert( a == b , "a and b are not equal")
// alert('Hello from the alert box!')
// console.log("Hello from the console log !")
// alert("Hello from the alert box!")
// console.log("This is the end of the script execution.")

// confirm 

// let state = confirm('Do you want to proceed?')
// console.log(state)

// let age = prompt('What is your age?')
// console.log(`You will be ${+age + 1} years old next year.`)
// console.log(typeof age)


// Operators Maths

// + = addition
// - = subtraction
// * = multiplication
// / = division
// % = modulus (remainder)
// ** = exponentiation

// 5 % 2 = 1 
// 5 - 2 = 3
// 3 - 2 = 1 RM
// ceil 
// floor 
// let a = Math.PI
// let smallData = 10.923
// console.log(a)
// console.log(Math.ceil(smallData) , 'ceil')
// console.log(Math.floor(smallData), 'floor')
// console.log(Math.round(smallData) , 'round')

// let randomNumber =Math.floor((Math.random() * 6) + 1)
// 0 => 1 * 6 
// 0 => 6 + 1
// 1 => 7 

// console.log(randomNumber)
//    start              end  
// 0<= randomNumber < 1   * 2
//   0<= randomNumber < 2 * 3
//  0 <= randomNumber < 6
// 1 <= randomNumber < 3


// 0 => 1 * 2
// 0 => 2 + 1
// 1 => 3

// find the area of a circle 
// check if a number is even or odd 
// number guessing game 



// let radius = prompt('Enter the radius of the circle (R):')
// let parsedR = parseInt(radius)
// const PI = Math.PI
// let area = PI * Math.pow(parsedR,2)
// console.log(`the area of your circle is ${area.toFixed(4)}`)

// let userNumber = prompt('Enter a number to check if it is even or odd:')
// let returnType = (userNumber % 2 == 0)? `${userNumber} is an even number.` : `${userNumber} is an odd number.`
// console.log(returnType)

// let userNumber = parseInt(prompt('Guess a number between 1 and 10:'))
// let computerNumber  = Math.floor((Math.random() * 10) + 1)
// // let returnType = (userNumber == computerNumber)? "Congratulations! You guessed correctly." : `Sorry, the number was ${computerNumber}. Try again.`;
// let returnType = (userNumber > 10)? 'Your number is greater than 10.' : (userNumber == computerNumber)? 'Congratulations, you got it right' : `The computer number is ${computerNumber}.`
// console.log(returnType)


// Array And Objects 

// let a = 20 
// a = 100
// console.log(a)

// let newArray = new Array(10)
// // push 
// newArray.push(100)
// newArray.push(10)
// newArray[0]= 1000
// newArray[1] = 120 
// newArray[2] = 40 
// newArray[6] =  200
// newArray[9] = 500
// newArray[7] = "WELCOME TO DD"
// unshift
// newArray.unshift(1234)
// shift
// let newdata = newArray.shift()
// newArray.shift()
// newArray.shift()
// newArray.shift()

// pop
// newArray.pop()
// newArray.pop()
// newArray.pop()
// newArray.pop()





// console.log(newArray)




// index  = length - 1
// length  = 10
// let newArrays = new Array() 
// let arr = []

// console.log(arr , newArrays)
// let arr = [ 7,  -4, 8,  11,  1, 9,  4, 10,  6]
// let newColl = [-4 , 7 , 8 , 1 , 9, 4 , 10 , 6 , 11 ]
// [-4 , 1 , 4 , 6 , 7 ,8 ,9, 10 ,11]




// let sorting = arr.sort((a,b)=>{
//       return a-b
// })
// console.log(sorting)

// acc = 100 + 1
// acc = 101 + 2
// acc = 103 + 3
// acc = 106 + 4 
// acc = 110
// let total = arr.reduce((acc, currentvalue)=>{
//   return acc + currentvalue;
// },100)
// console.log(total)
// let newList = [4, 7 , 8 , 9 , 10]
// // a = 10
// let filteringData = arr.filter((a)=>{
//       return a > 3
// })

// let mappingData = arr.map((data)=>{
//      return data * 4
// })

// console.log(mappingData)

// c
// onsole.log(filteringData)

// let arr = [ 7,  -4, 8,  11,  1, 9,  4, 10,  6 , 13]
// let isValid = arr.includes(10)
// let index = arr.indexOf(14)
// console.log(isValid)
// console.log(index)
// let words = "Hello World"
// let spl = words.split("").join().replace(/,/g , "")
// console.log(spl)
// let wordArray = Array.from(words)
// console.log(wordArray)




// let data = arr.forEach((a , i , newarr)=>{
//     console.log(newarr)
// })
//                 // 11   2  3            
// let arr = [  7,  -4, 8, 11,  1, 9,  4, 10,  6 , 13]
            //  1    12  3           
// let arr = [  7,  -4, 8, 11,  1, 9,  4, 10,  6 , 13]


// let data = arr.slice(1,3)

// let data = arr.splice(1,3)

// console.log(data , arr)

// let arr = [[1,2,4], [4,5,6], [7,8,9] , 20,30]
// let flat = arr.flat()
// console.log(flat)

// Objects  

// let arr = new Array()
// let array_2 = [1,2,3,4,5]

// let arr = ['mike', 'john', 'jane', 'sarah']

// let obj = new Object()
// let obj_2 = {'age':40,'son':'john','daughter':'jane','granddaughter':'sarah'}

// console.log(obj_2['granddaughter'])

// let  key = Object.keys(obj_2)
// let values =  Object.values(obj_2)
// let entries =   Object.entries(obj_2).flat()
// console.log("keys ==>", key ,"values ==> ", values , "entries ==>", entries)
// console.log(obj_2.age)

// Object.freeze(obj_2)

// obj_2['animal'] = "goat"
// console.log(obj_2)

// let classObj = {
//     name:"mike",
//     age:35,
//     location:"lagos",
//     siblings:['john','jane','sarah'],
//     callName:()=>{
//         classObj.siblings.forEach((sibling)=>{
//             console.log(`Hello ${sibling}, I am ${classObj.name} and I am ${classObj.age} years old. I live in ${classObj.location}.`)
//         })
//     }

// }


// classObj.callName()

// github













