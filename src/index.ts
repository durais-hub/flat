
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

function flatGivenObjectToPath(obj: any, parentKey=''): any  {
   return Object.entries(obj).reduce((aggregator: Record<string, any>, [key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      Object.assign(aggregator, flatGivenObjectToPath(value, newKey));
    }else {
      aggregator[newKey] = value;
    }

    return aggregator;
  }, {});
}


console.log("input object:", input);
const flattened = flatGivenObjectToPath(input);
console.log("Flattened object:"); 
console.log(flattened);