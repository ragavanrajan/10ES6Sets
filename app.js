// SETS -store unique values of any type 

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('A string');
set1.add({
    name: 'John'
});
set1.add(true);
set1.add(100);


/* const set2 = new Set([1, true, 'string']);
console.log(set2); */

// console.log(set1);

// Get count 
// console.log(set1.size);

// Check for values 
/* console.log(set1.has(100));
console.log(set1.has(50 + 50)); */

// this is the reference value- so u wont get true eventhough the below is declared above 
/* console.log(set1.has({
    name: 'John'
})); */


// The below expression will return false- because the first declaration is saved in different memory- it is not a primitive type

/* console.log({
    name: 'John'
} === {
    name: 'John'
}); */

// Delete from set 

set1.delete(100);
// console.log(set1);

// Iterating through sets 

// For .. of 

//entries will return array 

/* for (let item of set1.entries()) {
    console.log(item);


} */

// ForEach loop 

/* set1.forEach((value) => {
    console.log(value);
}) */

// Convert set to array 

const setArr = Array.from(set1);
console.log(setArr);