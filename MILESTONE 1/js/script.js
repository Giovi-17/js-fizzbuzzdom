/* Per i multipli di 3 stampi in console “Fizz” al posto del numero e 
per i multipli di 5 stampi in console Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz. */

for(let i = 1; i <= 100; i++){

    if( (i % 3 === 0) && (i % 5 === 0) ){

        console.log('fizzbuzz');

    } else if (i % 3 === 0){

        console.log('fizz');

    } else if (i % 5 === 0){

        console.log('buzz');

    } else{

        console.log(i);

    }

}