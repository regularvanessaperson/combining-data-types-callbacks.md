
//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayola: ["red", "green", "blue"]
}

console.log(crayonBox.crayola[0])

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: ["metal", "plastic"],
        color: ["blue","white"]
    }
}

console.log(bottle.cap.color[0])

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {name: "milk bread", price: "$2.50"},
    {name: "egg tart", price: "$1.75"},
    {name: "cold brew", price: "$3.25"}
]

console.log(receipt[0].name)

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [ ["Bill","Linda"], ["Aaron","Roxy","Phineas", "Gideon"], ["Joe","Ramses","Kirby","Natalie"]]

console.log(apartmentBuilding[1][0])

//Combine objects, arrays, and functions more than one level deep

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = ()=> {
    let scarf = {
    item: "scarf",
    size: "6ft",
    material: "cotton"
    }
    return scarf
}

console.log(knit().item)

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
    const crayonBox = {
        crayola: ["red", "green", "blue"]
    }
    return crayonBox
}

console.log(crayonSelector().crayola[0])

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
    const options = () =>{
        console.log("Call me maybe")
    }
    return options
}

powerButton()()

//Model a Vending Machine 

const vendingMachine = {
   vend: (index) => {
        let snacks = [{name: "Hot Cheetos", price: "1,00"},
        {name:"M&Ms",price: "1.00"},
        {name: "PayDay", price: "1.00"}
        ]
        return snacks[index]}
    }


console.log(vendingMachine.vend(1))

// Callbacks

//1. Make a function add that takes two arguments (numbers) and sums them together
const sumOf = (a,b) => {
    return a+b
  }

sumOf(1,1)

//2. Make a function subtract that takes two arguments (numbers) and subtracts them
const subtractNum = (a,b) => {
    return a-b
   }
   
   subtractNum(1,1)

//3. Make a function multiply that takes two arguments and multiplies them
const multiplyNum = (a,b) => {
    return a*b
   }
   
   multiplyNum(1,1)
//4. Make a function divide that takes two arguments and divides them
const divideNum = (a,b) => {
    return a/b
   }
   
   divideNum(2,4)
//5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (operates,a,b) =>{
    operates(a,b)
}

//6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (operates,a,b) =>{
    return operates(a,b)
}
calculate()
//7. Call calculate 4 times, each time using one of the operation functions you wrote

const calculate = (operates,a,b) =>{
    return operates(a,b)
}
calculate(divideNum,3,6)
calculate(multiplyNum,4,3)
calculate(sumOf,9,7)
calculate(subtractNum,8,3)

//Function definition placement

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

// the error produced by calling the function above the actual function says that it cannot access the function before initialization. It cannot call a function before it the function is read.