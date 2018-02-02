// 
// object destructuring
// 

// const person = {
//   name: 'Teresa',
//   age: 34,
//   location: {
//     city: "Rochester",
//     temp: 14
//   }
// };

// // const name = person.name, age = person.age;
// // destructuring works just like importing a named export
// // you can also rename it, by providing varName: newName
// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}.`)

// if (city && temperature) {

//   console.log(`It's ${temperature} degrees in ${city}, where she lives.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName)


// array destructuring
// defining the variable names to pull out of the array, uses the position of the items since there are no keys
// you don't need the renaming syntax since the arrays don't have pre-existing names
// but you can still set defaults

// const address = ['1299 S Juniper St', 'Rochester', 'NY', '14624'];

// const [street, city, state = 'New York', zip] = address;

// // this one only pulls in the city and state
// // const [, city, state, ] = address;

// console.log(`You are in ${city}, ${state}. `)

const item = ['coffee (hot)', '$2', '$2.50', '$2.75' ];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs ${medium}`)