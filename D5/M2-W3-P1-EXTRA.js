// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(arr) {

    var somma = 0;

    for (let element of arr) {
        if (element > 5) {
            somma += element;
            console.log("true");
        } else {
            console.log("false");
        }
    }
    return somma;
}

function giveMeRandom() {

    let arr = [];

    for (var i = 0; i < Math.round(Math.random() * 10); i++) {
        arr[i] = Math.round(Math.random() * 10);
    }
    //console.log(arr);
    return arr;
}

console.log(checkArray(giveMeRandom()));


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. 
 Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let shoppingCart = [
    {
        prezzo: 5,
        nome: "auto",
        id: "Fiat 500",
        quantitàDaSpedire: 0
    },
    {
        prezzo: 10,
        nome: "auto",
        id: "Fiat Tipo",
        quantitàDaSpedire: 0
    },
    {
        prezzo: 15,
        nome: "auto",
        id: "Fiat Croma",
        quantitàDaSpedire: 0
    }
]

function shoppingCartTotal(nome, quantità) {
    var tot = 0;

    for (let element of shoppingCart) {
        if (nome === element.id) {
            element.quantitàDaSpedire = quantità;
            tot = element.prezzo * element.quantitàDaSpedire;
        }
    }
    return tot;
}

console.log(shoppingCartTotal("Fiat Croma", 5));
*/
/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    {
        prezzo: 5,
        nome: "auto",
        id: "Fiat 500",
        quantitàDaSpedire: 0
    },
    {
        prezzo: 10,
        nome: "auto",
        id: "Fiat Tipo",
        quantitàDaSpedire: 0
    },
    {
        prezzo: 15,
        nome: "auto",
        id: "Fiat Croma",
        quantitàDaSpedire: 0
    }
]

function addToShoppingCart(price, name, newID, quantity) {
    const object = {
        prezzo: price,
        nome: name,
        id: newID,
        quantitàDaSpedire: quantity
    }
    return shoppingCart.push(object);
}

function shoppingCartTotal(nome, quantità) {
    var tot = 0;

    for (let element of shoppingCart) {
        if (nome === element.id) {
            element.quantitàDaSpedire = quantità;
            tot = element.prezzo * element.quantitàDaSpedire;
        }
    }
    return tot;
}

//console.log(shoppingCartTotal("Fiat Croma", 5));
//console.log(addToShoppingCart(5, "auto", "Fiat 500x", 3));

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(arr) {
    let max = 0;
    for (element of arr) {

        if (element.prezzo > max) {
            max = element.prezzo;
        }
    }

    return max;
}

//console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(arr) {
    const [last] = arr.slice(-1);
    return last;
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function loopUntil(x) {
    if (x < 0 || x > 9) {
        console.log("Numero non valido");
    }

    var count = 0;
    var random = Math.random() * 10;
    while (random > x) {
        if (count < 3) {
            count++;
        } else {
            console.log(random);
        }
    }
}*/

//loopUntil(5);

/*const loopUntil = function (n) {
    let counter = 0;
    while (counter !== 3) {
        let random = Math.floor(Math.random() * 10);
        console.log(random);
        if (random > n) {
            counter++;
        } else {
            counter = 0;
        }
    }
}
console.log(loopUntil(8));*/

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.lentght; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }
    let media = sum / count;
    return media;
}

console.log(average([3, 4, 5, 6, 7, 8, 9, 10]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filter(emailContent) {
    if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
        return false;
    } else {
        return true;
    }
}
console.log(filter("Dio SPAM"));

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const data = function (selectDate) {
    let today = new Date();//data corrente
    let diffDate = today - selectDate;//differenza tra data corrente e data selezionata
    return Math.floor(diffDate / (1000 * 60 * 60 * 24));//fa divisione tra diffDate * n° millisecondi e arrotonda
}
console.log(data(new Date("2011-05-30")));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = function (x, y) {
    let matrix = [];
    for (let i = 0; i < y; i++) {//determina il numero di righe della matrice
        for (let j = 0; j < x; j++) {//determina il numero di colonne della matrice
            matrix.push(i.toString() + j.toString())//ad ogni interazione dei cicli uniamo il valore di i e j come stringhe e crea un elemento della matrice che sarà l'indice
        }
    }
    let carPerRow = matrix.length / y;//variabile del numero degli elementi per riga
    for (let z = 0; z < y; z++) {//ci aiuta a stampare la matrice
        console.log(matrix.slice(z * carPerRow, (z + 1) * carPerRow));//slice prende come argomenti la posizione iniziale e la posizione finale
    }
}
console.log(matrixGenerator(3, 4));