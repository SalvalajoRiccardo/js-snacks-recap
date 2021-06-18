const numeri = [1,2,3,4,5,6,7,]

let a = parseInt(prompt('inserisci numero partenza tra 1 e ' + (numeri.length - 1)));

let b = parseInt(prompt('inserisci numero arrivo tra 2 e '+numeri.length + ', deve essere maggiore della partenza'));

while (a > b || b > numeri.length) {
    alert  ('hai sbagliato riprova');

    a = parseInt(prompt('inserisci numero partenza tra 1 e ' + (numeri.length - 1)));
 

    b = parseInt(prompt('inserisci numero arrivo tra 2 e '+numeri.length + ', deve essere maggiore della partenza'));
}


let nuoviNum = (array,part,arriv) => {
    let filtarto = array.foreach((num,i) => {
        if(i > part && i <= arriv)
        return num
    });
    return filtarto;
}

nuoviNum(numeri,a,b)