function checkNumber(index) {
    const numbers = [3, 7, 1, 6]; // Array numbers berisi empat angka: 3, 7, 1, dan 6.
    return new Promise((resolve, reject) => {
        const number = numbers[index];
        if (number > 5) {
            resolve(number + 5);
        } else {
            reject("Number too low");
        }
    });
}


checkNumber(1)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });