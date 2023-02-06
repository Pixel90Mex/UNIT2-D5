/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {

    return l1 * l2;
}

console.log(area(4, 6));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(par1, par2) {
    let var1 = parseInt(par1);
    let var2 = parseInt(par2);

    if (var1 === var2) {
        return (var1 + var2) * 3;
    } else {
        return (var1 + var2);
    }
}

console.log(crazySum(3.4, 5.3));

//controllo html per input 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(par){

   let risultato = Math.abs(par - 19);
   
   if(risultato > 19){
    return risultato * 3;
   } else {
    return risultato;
   }
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num){
    let num1 = parseInt(num);

    if((num1 > 20 && num1 <= 100) || num1 === 400){
        return true;
    } else {
        return false;
    }
}

console.log(boundary(150));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(s){
    
    if(s.startsWith("code")){
        return s;
    } else {
        return "code".concat(s);                
    }
}

console.log(codify("codeMessanaInvictus"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(int){
    if(int > 0){
        if(int % 3 === 0 || int % 7 === 0){
            return true;
        } else {
            return false;
        }
    } else {
        return "Scrivi un valore positivo!";
    }
}

console.log(check3and7(-55));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str){
    return str.split("").reverse().join("");    // Step 1. Usa il metodo split() per restituire un nuovo array
                                                // Step 2. Usa il metodo reverse() per invertire l'array appena creato
}                                               // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array

console.log(reverseString("Basileus"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str){
    
    const stringa = str.split(" ");

    for (var i = 0; i < stringa.length; i++){
        stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1);
    } //chiedere agli altri!

    const stringaDue = stringa.join(" ");

    console.log(stringaDue);

    
}

console.log(upperFirst("ciao messana!"));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){

    return str.slice(1, str.length-1);
}

console.log(cutString("Ciao"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){

    var ar = [];

    for(var i = 0; i < n; i++){
        ar[i] = Math.round(Math.random()*10);
    }

    return ar;
}

console.log(giveMeRandom(100));
