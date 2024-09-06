function calculateTotalPrice(quantity, pricePerItem, isConfirmed) {
    let totalPrice = quantity * pricePerItem;
    if (isConfirmed) {
        totalPrice -= totalPrice * 0.15;
    }
    return totalPrice;
}

console.log(calculateTotalPrice(3, 150,true));


function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed) {
        console.log(`Purchase confirmed with total price: ${totalPrice}`);
    } else {
        console.log("Purchase not confirmed");
    }
}

let totalPrice = calculateTotalPrice(3, 150, true);
confirmPurchase(true, totalPrice);