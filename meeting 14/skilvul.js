// Async & await
// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }
  
  
//   async function messages() {
//     try {
//       const msg = await helloWorld();
//       console.log(msg);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
  
//   messages();

  



  function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        console.log(users);
      });
  }
  
  ambilDataUser();