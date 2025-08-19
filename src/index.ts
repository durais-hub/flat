
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

function flatGivenObjectToPath(obj: any, parentPropKey=''):  Record<string, any>  {
   return Object.entries(obj).reduce((aggregator: Record<string, any>, [key, value]) => {
    const freshKey = parentPropKey ? `${parentPropKey}.${key}` : key;

    // If the value is an array, we recursively call the function.
    // Otherwise, we just assign the value to the key.
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${freshKey}[${index}]`;
        if (typeof item === 'object' && item !== null) {
          Object.assign(aggregator, flatGivenObjectToPath(item, arrayKey));
        } else {
          aggregator[arrayKey] = item;
        }
      });
      // If the value is an object
    } else if (typeof value === 'object' && value) {
      Object.assign(aggregator, flatGivenObjectToPath(value, freshKey));
      // If the data is primitive javascript type
    }else {
      aggregator[freshKey] = value;
    }

    return aggregator;

    // Return the flattened object, or empty object if the input is not an object
  }, {});
}


console.log("Input object:", input);
const flattened = flatGivenObjectToPath(input);
console.log("Flattened object:"); 
console.log(flattened);