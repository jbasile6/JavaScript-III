/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- When adding a method to the function, the function does not have access to the
properties without putting the 'this' keyword before calling on the property within a method. When you are
 in the browser, 'this' will be the window(such as when Codepen's global 'name' property calls the name 'Codepen').

* 2. Implicit Binding- It occurs automatically when dot notation is used with the 'this' keyword to call on
properties in the method in an object. Will prevent window binding.

* 3. New Binding- The constructor functions. They allow you to use a function to create more objects with the same
properties and methods.

* 4. Explicit Binding- It is binding that we control within functions. We use '.call()', '.apply()', or '.bind()'.
We use these tags to create a function that multiple Objects are able to run through. 
*
* write out a code example of each explanation above
*/

// Principle 1

// */ code example for Window Binding
const person = {
    firstName: 'James',
    lastName: 'Basile',
    greeting: 'Hello',
    introduce: function() {
        console.log(`${greeting}, My name is ${firstName} ${lastName}. Nice to meet you.`)
    }
}
/*** function call is commented out below
//person.introduce(); --> Without 'this' keyword, the method tries to access the properties in the window,
//rather than the onces within the object

// Principle 2

// code example for Implicit Binding*/

const person2 = {
    firstName: 'Jimmy',
    lastName: 'Baz',
    greeting: 'Hello',
    introduce: function() {
        console.log(`${this.greeting}, My name is ${this.firstName} ${this.lastName}. Nice to meet you.`)
    }
}

person2.introduce();


// Principle 3

// code example for New Binding

function CreatePerson(name) {
    this.name = name;
    this.phrase = `Hi, I'm ${this.name}`;
    this.sayHi = function () {
        console.log(`${this.phrase}`)
    }
}

const james = new CreatePerson('James');
james.sayHi();



// Principle 4

// code example for Explicit Binding

const guy = {
    name: 'James'
}

const girl = {
    name: 'Jamie'
}

knownLanguages = ['HTML', 'CSS', 'JavaScript']

function aboutMe(one, two, three) {
    console.log(`Hi, My name is ${this.name} and I know the following languages: ${knownLanguages}`)
}

aboutMe.call(person, knownLanguages);