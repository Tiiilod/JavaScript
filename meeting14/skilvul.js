// Async & await
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  
  async function messages() {
    try {
      const msg = await helloWorld();
      console.log(msg);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  messages();

  