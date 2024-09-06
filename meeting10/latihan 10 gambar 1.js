function registerUser(name, userType) {
    return "Selamat datang "
}

function registerUser(name, userType) {
    if (userType === "VIP") {
        return `Welcome VIP, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

console.log(registerUser("turky", "VIP"));


function applyDiscount(userType, purchaseAmount) {
    let discount;
    if (userType === "VIP") {
        discount = 20;
    } else {
        discount = 10;
    }
    let totalAfterDiscount = purchaseAmount - (purchaseAmount * discount / 100);
    return totalAfterDiscount;
}

console.log(applyDiscount("VIP", 200));
console.log(applyDiscount("NON-VIP", 100));

