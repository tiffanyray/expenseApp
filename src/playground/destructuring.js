
//Object Destructuring

// const person = {
//     name: 'Tiffany',
//     age: 23,
//     location: {
//         city: 'Dallas',
//         temp: 41
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// }

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);





//Array Destructuring

// const address = ['4216 Sloane Street', 'Carrollton', 'Texas', '75007'];

// const [, city, state = 'New york' ] = address;

// console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, , mediumCost ] = item;

console.log(`A medium ${itemName} costs ${mediumCost}.`);