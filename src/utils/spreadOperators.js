const randomArray = [1, 2, 3, 4, 5];
const newArray = [randomArray]; // [[1, 2, 3, 4, 5 ]]
// notice the double array
const newArray1 = [...randomArray]; // [1, 2, 3, 4, 5 ]
// spread operators only COPY THE CONTENT of the array/object

const randomObject = { name: "John Doe", age: 25 };
const newObject = { randomObject }; // { { name: 'John Doe', age: 25 } }
const newObject1 = { ...randomObject }; // { name: "John Doe", age: 25 }
