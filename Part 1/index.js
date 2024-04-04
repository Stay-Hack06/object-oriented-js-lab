// Exercises for learning about Object Oriented JavaScript: Part 1


// Question 1: Based on the Constructor function below. Create three Flower objects

function Flower(color, petals, smell){
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smell;
}
// Creating Flower objects
let rose = new Flower('red', 32, true);
let sunflower = new Flower('yellow', 24, false);
let lavender = new Flower('purple', 28, true);



// Question 2: 
// Review the following code:

function Contact(name, email) {
  this.name = name;
  this.email = email;
 }

let myOtherContact = new Contact('Everest', 'everest@hello.com');
console.log(myOtherContact.name);
  

// What would be logged to the console when this code is run?

//Everest

// Question 3: 
// Given the following code:

function Animal(species, noise) {
  this.species = species;
  this.noise = noise;
  this.makeNoise = function() {
    console.log(this.noise + ", " + this.noise);
  }
}

// How would you create an instance of an Animal?
const dog = new Animal('Canine', 'Bark');




// Question 4: TODO LIST EXERCISE

// Create a constructor for an object that holds the information for a Todo List. Each new object created by the constructor should have:

// A description of the task.
// An attribute to define if the task is done.
// A method to call when the task is done.

// Create 3 objects with the constructor function


function TodoList(description, isDone) {
  this.description = description;
  this.isDone = isDone;
  this.taskDone = function() {
      console.log(`Task "${this.description}" is done.`);
  };
}

const task1 = new TodoList('Complete project', false);
const task2 = new TodoList('Buy groceries', false);
const task3 = new TodoList('Call the Doctor', false);



//Question 5:
// Exercise: FinTech Project

// Create a constructor function for an "Account" with the following properties:
//    - accountNumber (a unique number for each account)
//    - accountHolder (name of the account holder)
//    - balance (initial balance, default to 0)
//    - deposit(amount) method that adds the specified amount to the balance
//    - withdraw(amount) method that subtracts the specified amount from the balance


// Create two instances of the Account object and test the deposit and withdraw methods.
// Exercise: FinTech Project

function Account(accountNumber, accountHolder, balance = 0) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = balance;
  
  this.deposit = function(amount) {
      this.balance += amount;
  };
  
  this.withdraw = function(amount) {
      this.balance -= amount;
  };
}

const account1 = new Account(123456, 'Teagen');
const account2 = new Account(789012, 'Ruby');

account1.deposit(1000);
account1.withdraw(500);

account2.deposit(500);
account2.withdraw(200);
