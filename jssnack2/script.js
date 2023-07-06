const numbers = [6, 2, 2, 4, 7, 6, 3, 8, 8, 10];
console.log(numbers)
let sommaPosizioneDispari = 0;

for (i = 0; i < numbers.length; i++) {
    let posizioneDispari = (i % 2==0);

    if (posizioneDispari == true) {
        sommaPosizioneDispari += numbers[i];
    }
}

console.log("somma dei numeri in posizione dispari:", sommaPosizioneDispari)

