const age = document.getElementById("age1");


const km = document.querySelector(".km_input");

const clickForTicketEl = document.querySelector('.btn_for_a_ticket');
clickForTicketEl.addEventListener('click', printTicket);

function printTicket(event){

    let km_price = km.value * 0.21;
console.log(km_price);

let discounted_price;
if (age.value == "underage") {
    discounted_price = km_price / 100 * 80 ;
} else if (age.value == "over_65" ){
    discounted_price = km_price / 100 * 60 ;
} else {
    discounted_price = km_price;
}

let discounted_price_with_decimal = discounted_price.toFixed(2);

console.log(`il costo del biglietto ammonta a ${discounted_price_with_decimal} euro`);

}
