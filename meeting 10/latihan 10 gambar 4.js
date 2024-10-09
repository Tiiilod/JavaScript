function calculateDiscount(totalPrice, location) {
    let discount = 0;
    if (location === "Jakarta" || location === "Bandung") {
        discount = 0.05;
    }
    let finalPrice = totalPrice - (totalPrice * discount);
    return { finalPrice: finalPrice };
}

function displayResult(location) {
    let totalPrice = 1000; 
    let result = calculateDiscount(totalPrice, location);
    console.log(`Final price for location ${location}: ${result.finalPrice}`);
}

function errorHandling(totalPrice, paymentStatus) {
    if (paymentStatus === "paid") {
        console.log("Transaction completed");
    } else {
        console.log("Transaction pending");
    }
}

function calculateDiscountAndTax(totalPrice, location, paymentStatus) {
    let result = calculateDiscount(totalPrice, location);
    if (paymentStatus === "paid") {
        console.log(`Payment successful! Total amount: ${result.finalPrice}`);
    } else {
        console.log("Payment pending");
    }
}


displayResult("Jakarta");
errorHandling(1000, "paid");
calculateDiscountAndTax(1000, "Jakarta", "paid");