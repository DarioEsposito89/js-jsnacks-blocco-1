const guestName = ["Dario", "Giovanni", "Michele", "Paolo", "Luca", "Francesco", "Sara", "Serena", "Maria", "Loredana"] 
const guestLastname = ["Esposito", "Rossi","De Angelis", "Criscuolo", "Fusco", "Pinelli", "Panetta", "Zorzi"]

const guestList = []
console.log (guestList)

for (let i = 0; i < 30; i++) {
let casualName = guestName[Math.floor(Math.random() * guestName.length)];
console.log("Name Random:", casualName);



let casualLastname = guestLastname[Math.floor(Math.random() * guestLastname.length)];
console.log("Lastname Random:", casualLastname);

let guestRandom = (`${casualName} ${casualLastname}`);
console.log("Name Complete:", guestRandom);

guestList.push (guestRandom);



document.getElementById("guest").innerHTML = guestRandom;

}
