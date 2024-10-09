function fetchStep1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 1 completed');
        }, 1000);
    });
}

function fetchStep2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 2 completed');
        }, 2000);
    });
}

function fetchStep3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 3 completed');
        }, 3000);
    });
}


Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });