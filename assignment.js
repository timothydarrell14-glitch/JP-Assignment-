// LEVEL:1(a)

function add(num1, num2){
    
    result = num1 + num2

}
add(5, 4)
console.log(result)

// LEVEL:1 (b)

let i = 5

if(i % 2 === 0){
    console.log("This is an even number")
}
else{
    console.log("This is an odd number")
}

// LEVEL:2(a) 

/* for(let x = 1){
    console.log(x)
} */

// LEVEL:2 (b)

let fruits = ["Kiwi", "Banana", "Orange", "Pear", "Pineapple"]

let typeOfFruit = [...fruits]
console.log(typeOfFruit)

fruits[1] = "Bananas" // Identify the item with bracket notation -> Change the item 

console.log(fruits)

// Level: 3(a)

/* function greet(name){
    console.log("Welcome!", name)
}
greet(Guest) */

// Level: 3(b)

let student = {
    firstName: "Timothy",
    lastName: "Darrell",
    age: 18,
    candidateNum: 1109,
    grade : 85
}
let grade = 85

function addGrade(){
    if(grade < 90)
    console.log(student, "A")
}
   if(grade < 80){
    console.log(student,"B")
}
else if(grade < 70){
    console.log(student, "C")
}
else if(grade < 60){
    console.log(student, "D")
}
else if(grade < 50){
    console.log(student, "F")
}
