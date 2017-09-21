let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Success!");
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
  });

// function resolveAfter2Seconds(x) {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }

// async function f1() {
//     const x = await resolveAfter2Seconds(10);
//     console.log(x);
// }

// f1();

// async function add1(x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }