// Question 13: Your Own Array........................
// let vehicles: string[] =['Corolla','Swift', 'Hybrid','Land Cruiser' ] ;
// vehicles.forEach (vehicle=>{
//     console.log(`I would like to own a ${vehicle}`);
// })
// Question 14: Guest List.......................
var guests = ['Bilal', 'Sania', 'Ali', 'Zahra'];
guests.forEach(function (guest) {
    console.log(" ".concat(guest, " ! You are invited for the dinner today."));
});
// Question 15: Changing Guest List....................
var unableToAttend = "Bilal";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Javeria";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
