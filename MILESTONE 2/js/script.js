/* Dato un container nel DOM, 
appendi un elemento html con il numero o la stringa corretta. */

const containerTotal = document.querySelector('.container');

for(let i = 1; i <= 100; i++){

    if( (i % 3 === 0) && (i % 5 === 0) ){

        const newBox = `
    
        <div class="square">fizzbuzz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else if (i % 3 === 0){

        const newBox = `
    
        <div class="square">fizz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else if (i % 5 === 0){

        const newBox = `
    
        <div class="square">buzz</div>
    
        `;

        containerTotal.innerHTML += newBox;

    } else{

        const newBox = `
    
        <div class="square">${i}</div>
    
        `;

        containerTotal.innerHTML += newBox;

    }

}