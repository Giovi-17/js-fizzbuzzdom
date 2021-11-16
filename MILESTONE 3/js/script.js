/* Applica uno stile differente a seconda del valore dell'indice 
per i multipli di 3, 
per i multipli di 5 
e per i valori che sono sia multipli di 3 che di 5. */

const containerTotal = document.querySelector('.container');

for(let i = 1; i <= 100; i++){

    if( (i % 3 === 0) && (i % 5 === 0) ){

        const newBox = `
    
        <div class="square fizzbuzz">fizzbuzz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else if (i % 3 === 0){

        const newBox = `
    
        <div class="square fizz">fizz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else if (i % 5 === 0){

        const newBox = `
    
        <div class="square buzz">buzz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else{

        const newBox = `
    
        <div class="square">${i}</div>
    
        `;

        containerTotal.innerHTML += newBox;

    }

}