const age = document.getElementById("age1");
const km = document.querySelector(".km_input");
const nameEl = document.querySelector(".name_input");
const typeTicketEl = document.querySelector(".type_ticket");
const trainCarriageEl = document.querySelector(".train_carriage");
const cpCodeEL = document.querySelector(".CP_code");
const priceTicketEl = document.querySelector(".price_ticket");
const discountTicketEl = document.querySelector(".discount_ticket");
const finalTicketEl = document.querySelector(".final_ticket");
const btnToResetEl = document.querySelector(".btn_to_reset");

const clickForTicketEl = document.querySelector('.btn_for_a_ticket');
clickForTicketEl.addEventListener('click', printTicket);

function printTicket(event) {

    let km_price = km.value * 0.21;
    console.log(km_price);

    let discounted_price;
    if (age.value == "underage") {
        discounted_price = km_price / 100 * 80;
        typeTicketEl.innerHTML = "Discounted ticket";
    } else if (age.value == "over_65") {
        discounted_price = km_price / 100 * 60;
        typeTicketEl.innerHTML = "Discounted ticket";
    } else {
        discounted_price = km_price;
        typeTicketEl.innerHTML = "Standard ticket";
    }

    let discounted_price_with_decimal = discounted_price.toFixed(2);

    console.log(`il costo del biglietto ammonta a ${discounted_price_with_decimal} euro`);

    // INFO TRIP 

    document.querySelector(".first_second_name").innerHTML = nameEl.value;
    trainCarriageEl.innerHTML = Math.floor(Math.random() * 10 + 1);
    cpCodeEL.innerHTML = Math.floor(Math.random() * 100000);


    if (age.value == "underage" || age.value == "over_65") {
        priceTicketEl.innerHTML = `Prezzo biglietto : ${discounted_price_with_decimal}€ `;
        discountTicketEl.innerHTML = `anzinchè ${km_price}€`;
    } else {
        priceTicketEl.innerHTML = `Prezzo biglietto : ${discounted_price_with_decimal}€`;

    }

    // D-none 

    finalTicketEl.classList.remove("d-none");


}

btnToResetEl.addEventListener('click', function () {
    window.location.reload()
});
