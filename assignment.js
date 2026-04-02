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
/* let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = num; i < num.length; num.reduce ++){
    console.log(num)
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
}

let grade = 85

student.studentGrade = grade

function studentGrade(grade) {
    if(grade < 90)
    return ("A")

}
studentGrade()

console.log(student)



