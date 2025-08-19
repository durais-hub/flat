
// To have it meaningful, I preferred to use a meaningful object instead of the given sample.

const input = {
  user: {
    name: "Durairaj",
    age: 30,
    favouriteBooks: ["Sheldon", "Vairamuthu"],
    address: {
      city: "Coimbatore",
      zip: 641001
    }
  }
};

function flatGivenObjectToPath(obj: any): any  {
  return Object.entries(obj).forEach((key, value) => console.log(`contents ${key},: ${value}`), {});
}


const flattened = flatGivenObjectToPath(input);
console.log(flattened);