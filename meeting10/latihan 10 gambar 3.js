// Fungsi Cek Stok
function checkStock(item, requestedQuantity) {
    let stock = 50;
    if (requestedQuantity > stock) {
        return `Stock insufficient for ${item}`;
    } else {
        return `Stock sufficient for ${item}`;
    }
}

// Fungsi Menambahkan Stok
function restockItem(item, additionalStock) {
    let stock = 50;
    stock += additionalStock;
    if (stock >= 60) { 
        return `Restock complete for ${item}`;
    } else {
        return `Restock needed for ${item}`;
    }
}


console.log(checkStock("laptop", 54));
console.log(restockItem("Laptop", 30));