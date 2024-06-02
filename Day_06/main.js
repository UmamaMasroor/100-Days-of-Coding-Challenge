// // Question 16: More Guests..................................
// let guests: string[] =['Bilal','Sania', 'Ali','Zahra' ] ;
// console.log("Great news! I found a bigger dinner table!");
// // Adding more guests
// guests.unshift("Ismail Khan"); // add in the beginning
// guests.splice(guests.length / 2, 0, "Dua"); // add in the middle
// // guests.splice(2, 0, "Dua"); // add in the middle   // we can write above statement in this syntax as well.
// guests.push("Umar");   // add in the end
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });
// // Question 17: Shrinking Guest List...............................
// console.log("Unfortunately, I can only invite two people for dinner.");
// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
// guests.splice(0, guests.length);
// console.log(guests); // Shows an empty list
// Question 18: Seeing the World
// let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
// console.log("Original order:", places);
// console.log("Alphabetical order:", [...places].sort());
// console.log("Original order:", places);
// console.log("Reverse alphabetical order:", [...places].sort().reverse());
// console.log("Original order:", places);
// places.reverse();
// console.log("Reversed order:", places);
// places.reverse();
// console.log("Original order:", places);
// places.sort();
// console.log("Alphabetical order:", places);
// places.reverse();
// console.log("Reverse alphabetical order:", places);
var places = ["Dubai", "England", "Turkey", "Japan", "China"];
console.log("Original list: ", places);
console.log("Sorted: ", places.sort());
console.log("Reversed: ", places.sort().reverse());
