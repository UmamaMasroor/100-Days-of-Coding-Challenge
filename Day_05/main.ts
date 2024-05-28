// Question 13: Your Own Array........................

let vehicles: string[] =['Corolla','Swift', 'Hybrid','Land Cruiser' ] ;
vehicles.forEach (vehicle=>{
    console.log(`I would like to own a ${vehicle}`);
})

// Question 14: Guest List.......................

let guests: string[] =['Bilal','Sania', 'Ali','Zahra' ] ;
guests.forEach (guest=>{
    console.log(` ${guest} ! You are invited for the dinner today.`);
})

// Question 15: Changing Guest List....................

let unableToAttend = "Bilal";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Javeria";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});