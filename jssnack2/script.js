const numbers = [];
console.log(numbers)
let sommaPosizioneDispari = 0;

for (i = 0; i < 30; i++) {

    const casualNumbers = Math.floor(Math.random()*100) +1;

    let posizioneDispari = (i % 2==0);

    if (posizioneDispari == true) {
        sommaPosizioneDispari += casualNumbers;
    }

    numbers.push(casualNumbers);
}

console.log("somma dei numeri in posizione dispari:", sommaPosizioneDispari)

