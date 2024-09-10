function printEverySecond() {
    const intervalId = setInterval(() => {
        console.log("Hello, World!");
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

printEverySecond();