
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

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${freshKey}[${index}]`;
        if (typeof item === 'object' && item !== null) {
          Object.assign(aggregator, flatGivenObjectToPath(item, arrayKey));
        } else {
          aggregator[arrayKey] = item;
        }
      });
    } else if (typeof value === 'object' && value) {
      Object.assign(aggregator, flatGivenObjectToPath(value, freshKey));
    }else {
      aggregator[freshKey] = value;
    }

    return aggregator;
  }, {});
}


console.log("Input object:", input);
const flattened = flatGivenObjectToPath(input);
console.log("Flattened object:"); 
console.log(flattened);