function simulateTask() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 3000;
        setTimeout(() => {
            if (delay <= 2000) {
                resolve('Task Success');
            } else {
                reject('Task Failed');
            }
        }, delay);
    });
}


simulateTask()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Task completed'); // mau gagal atau berhasil finally akan tetap muncul
    });