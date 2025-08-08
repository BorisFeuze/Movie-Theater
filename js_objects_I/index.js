


//Objects
const book = {
  titel: 'Hell',
  author: 'James Bond',
  pages: 500,
  isRead: false,

  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};
console.log(book.summary());

//Destructoring

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
// Initial function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const [fruit1, fruit2] = fruits;
console.log(fruit1)
console.log(fruit2)

const [first, , third] = fruits;
console.log(first, third)

const { name, age } = person;
console.log(name)
console.log(age)

const { address: { city }} = person;
console.log(city)

function displayPerson({ name, age }) {
  console.log(name);
  console.log(age);
}
displayPerson(person);