function checkNumber(index) {
    const numbers = [3, 7, 1, 6]; 
    return new Promise((resolve, reject) => {
        const number = numbers[index];
        if (number > 5) {
            resolve(number + 5);
        } else {
            reject("Number too low");
        }
    });
}

// atau

// const number = [3, 7, 1, 6];
// function checkNumber() {
//   return new Promise((resolve, reject) => {
//     if (number[1] > 5) {
//       resolve("Number too high");
//     } else {
//       reject("Number too low");
//     }
//   });
// }


checkNumber(1)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });