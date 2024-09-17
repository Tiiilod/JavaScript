function fetchDataA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data A');
        }, 1000);
    });
}

function fetchDataB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data B');
        }, 2000);
    });
}


Promise.all([fetchDataA(), fetchDataB()])
    .then(results => {
        const combinedData = results.join(', ');
        console.log(combinedData);
    })
    .catch(error => {
        console.error(error);
    });