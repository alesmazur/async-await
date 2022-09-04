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

// so next I gonna show how to migrate from promise to async/awawit
// we can use Import to use already created promise, but due to gitHub repos I'll don't do that here. But ofcourse in will be more usable
const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

getData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// lets create new variables for error testing
const url = "https://jsonplaceholder.typicode.com/todos/";
const data = await getData(url);
console.log(data);
// to prevent Uncaught error just need to use tru catch block
try {
  const dataVerified = await getData(url);
  console.log(dataVerified);
} catch (error) {
  console.log(error.message);
}
