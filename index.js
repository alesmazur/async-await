const myFirstAsync = async () => {
  return "Succsess";
};

myFirstAsync().then((value) => console.table(value));

// what if promise was rejected?

const myFaildAsync = async () => {
  throw new Error("Some error message");
};

myFaildAsync();
