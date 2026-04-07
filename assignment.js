// LEVEL:1(a)-----------------

function add(num1, num2){
    
    result = num1 + num2

}
add(5, 4)
console.log(result)

// LEVEL:1 (b)------------------

let i = 5

if(i % 2 === 0){
    console.log("This is an even number")
}
else{
    console.log("This is an odd number")
}

// LEVEL:2(a) 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = num; i < num.length; num.reduce ++){
    console.log(num)
}

// LEVEL:2 (b)---------------------

let fruits = ["Kiwi", "Banana", "Orange", "Pear", "Pineapple"]

let typeOfFruit = [...fruits]
console.log(typeOfFruit)

fruits[1] = "Bananas" 
console.log(fruits)

// Level: 3(a)---------------

let name = "Guest"

function greet(name){
    console.log("Welcome!", name)
}
greet(Guest)

// Level: 3(b)-------------------------

let std = {
    name: "Timothy Darrell",
}

let grade = 85

std.studentGrade = grade

function stdGrade(grade) {
    if(grade < 90)
    return ("A")

}
stdGrade()

console.log(std)

// ----------------------

class student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    display(grade){
        if(grade > 50){
    console.log("Student passed")
}
        console.log(`${this.name}, has achieved a grade of ${this.grade}`)
    }

}

// Level: 4(a)----------------------

/* const delayedTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000); // 2 seconds
});

delayedTask.then(() => {
    console.log("Task Complete!");
}); */


// Level: 4(b)-----------------------

/* function factorial(n) {
    try {
        // Validate input
        if (typeof n !== "number") {
            throw new Error("Input must be a number");
        }

        if (n < 0) {
            throw new Error("Factorial is not defined for negative numbers");
        }

        let result = 1;

        for (let i = 1; i <= n; i++) {
            result *= i;
        }

        return result;

    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
} */



