const myFirstAsync = async () => {
  return "Succsess";
};

myFirstAsync().then((value) => console.table(value));

// what if promise was rejected?

const myFaildAsync = async () => {
  throw new Error("Some error message");
};

myFaildAsync();

// so next lets make new Async implementation with timeout
const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer start");
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log("Timer ended", startTime - endTime);
};

asyncFn();
 