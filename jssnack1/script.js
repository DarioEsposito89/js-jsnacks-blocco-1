const guestName = ["Dario", "Giovanni", "Michele", "Paolo", "Luca", "Francesco", "Sara", "Serena", "Maria", "Loredana"] 
const guestLastname = ["Esposito", "Rossi","De Angelis", "Criscuolo", "Fusco", "Pinelli", "Panetta", "Zorzi"]

for (let i = 0; i < guestName.length; i++) {
let casualName = guestName[Math.floor(Math.random() * guestName.length)];
console.log("Name Random:", casualName);



let casualLastname = guestLastname[Math.floor(Math.random() * guestLastname.length)];
console.log("Lastname Random:", casualLastname);

let guestRandom = (`${casualName} ${casualLastname}`);
console.log("Name Complete:", guestRandom);

document.getElementById("guest").innerHTML = guestRandom;

}
