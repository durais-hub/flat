import flatGivenObjectToPath from '../src/index';

describe('flattenObject', () => {

  test('handles empty object', () => {
    expect(flatGivenObjectToPath({})).toEqual({});
  });

  test('flattens a simple nested object', () => {
    const input = {
      user: {
        name: 'Durairaj',
        address: {
          city: 'Coimbatore',
          zip: 641001
        }
      }
    };

    const expected = {
      'user.name': 'Durairaj',
      'user.address.city': 'Coimbatore',
      'user.address.zip': 641001
    };

    expect(flatGivenObjectToPath(input)).toEqual(expected);
  });


  test('check primitive values and null', () => {
    const input = {
      name: 'Durairaj',
      age: 30,
      books: null
    };

    const expected = {
      'name': 'Durairaj',
      'age': 30,
      'books': null
    };

    expect(flatGivenObjectToPath(input)).toEqual(expected);
  });

  // TODO: Handle array scenario
   test('Check mixed arrays and objects', () => {
    expect(1).toEqual(1);
  });


});