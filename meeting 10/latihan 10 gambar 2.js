// Fungsi Kalkulasi Harga
function calculatePrice(quantity, pricePerItem, isMember) {
    let totalPrice = quantity * pricePerItem;
    if (isMember) {
        totalPrice -= totalPrice * 0.15;
    }
    return totalPrice;
}


// Fungsi Konfirmasi Pembayaran
function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed) {
        console.log(`Purchase confirmed with total price: ${totalPrice}`);
    } else {
        console.log("Purchase not confirmed");
    }
}

let quantity = 3;
let pricePerItem = 150;
let isMember = true;
let isConfirmed = true;

let totalPrice = calculatePrice(quantity, pricePerItem, isMember);
confirmPurchase(isConfirmed, totalPrice);