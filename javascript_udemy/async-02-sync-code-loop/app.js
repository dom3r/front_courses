const button = document.querySelector("button");
const output = document.querySelector("p");
// you can use promises instead of callbacks hell

const getPosition = (opts) => {
  const promise2 = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise2;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
};
// ASYNC WITH AWAIT
async function trackUserHandler() {
  //CALLBACKS
  console.log("Clicked!");
  // navigator.geolocation.getCurrentPosition(
  //   (posData) => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 2000);
  //     setTimer(2000).then(data=>{
  //       console.log(data, posData);
  //     });
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  // INSTEAD USE PROMISES
  //let positionData;
  //getPosition()
  // .then((posData) => {
  //   console.log(posData);
  //   positionData = posData;
  //   //PROMISE CHAINING
  //   return setTimer(2000);
  // USE AWAIT
  //})
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }

  // .catch((err) => {
  //   console.log(err);
  //   return 'on we go...';
  // // AWAIT MODE
  console.log(timerData, posData);
  // })
  // // , err=>{
  // //   console.log(err);
  // // })
  // .then((data) => {
  //   console.log(data, positionData);
  // });
  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then(promiseData=>{
  console.log(promiseData);
}); // resolve all promises, cancel if one rejected

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData2=>{
  console.log(promiseData2);
}); // resolve all promises, cancel if all rejected

//let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
