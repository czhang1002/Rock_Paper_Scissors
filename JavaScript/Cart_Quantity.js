function subscribe() {
    const buttonElement = document.querySelector('.subscribe_button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is_subscribe');
    }
    else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is_subscribe');
    }
}


let product = JSON.parse(localStorage.getItem('Cart')) || {
    cartQuantity: 0
}; 
document.querySelector('.cart').innerText = `Cart items: ${product.cartQuantity}`;

function addToCart() {
    product.cartQuantity += 1;
    // cartQuantity = cartQuantity + 1;
    // cartQuantity += 1;
    localStorage.setItem('Cart', JSON.stringify(product.cartQuantity));
    document.querySelector('.cart').innerText = `Cart items: ${product.cartQuantity}`;
}

function removeAll () {
    product.cartQuantity = 0;
    localStorage.removeItem('Cart');
    document.querySelector('.cart').innerText = `Cart items: ${product.cartQuantity}`;
    checkout();
}

function checkout() {
    let cost = 0;
    if (product.cartQuantity === 0) {
        document.querySelector('.totalCost').innerHTML = `The cost after tax is $${cost}`;
        document.querySelector('.totalCost').classList.add('result');
    }
    else {
        cost = product.cartQuantity * 8.12;
        if (cost < 40) {
            costWithTax = cost + cost * 0.0875;
            cost = costWithTax + 10;
            cost = cost.toFixed(2);
        }
        else {
            cost = cost + cost * 0.0875;
            cost = cost.toFixed(2);
        }
        document.querySelector('.totalCost').innerHTML = `The cost after tax is $${cost}`;
        document.querySelector('.totalCost').classList.add('result');
    }  
}

function costKeyDown(event) {
    if (event.key === 'Enter') {
    calculateTotal();
    }
}    

function calculateTotal() {
    const input = document.querySelector('.input');
    let cost = Number(input.value);
    let costWithTax = 0;
    if (cost === 0) {
        document.querySelector('.Calculator_totalCost').innerHTML = `The cost after tax is $0.00.`;
    }
    else {
        if (cost < 40) {
            costWithTax = cost + cost * 0.0875;
            cost = costWithTax + 10;
            cost = cost.toFixed(2);
        }
        else {
            cost = cost + cost * 0.0875;
            cost = cost.toFixed(2);
        }
        document.querySelector('.Calculator_totalCost').innerHTML = `The cost after tax is $${cost}.`;
    }
}