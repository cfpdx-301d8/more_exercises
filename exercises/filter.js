// Return an array of numbers greater than 10
//
// [2, 4, 54, 3, 12, 9] -> [54, 12]
function bigNumbers(arr) {
  const newArr = arr.filter(function(num) {
    return num > 10;
  });
  return newArr;
}

// Return an array of numbers greater than 10
// and smaller than 30
//
// [9, 10, 44, 12, 34, 19] ->  [34, 19]
function middleNumbers(arr) {
  return arr.filter(function(num) {
    return num > 10 && num < 30;
  });
}

// Return an array of strings that contain the
// letter e
//
// ['sloth', 'gecko', 'hyrax', 'snake'] -> ['gecko', 'snake']
function hasAnE(arr) {
  return arr.filter(function(animal) {
    return animal.indexOf('e') >= 0;
  });
}

// **STRETCH**
//
// Return an array of strings that are plural and more
// than 5 characters
//
// ['sloth', 'geckos', 'hyrax', 'snakes', 'bats'] -> ['geckos', 'snakes']

function longPlural(arr) {
  return arr.filter(function(animal) {
    return animal.length > 5 && animal[animal.length - 1] === 's';
  });
}

module.exports = {
  bigNumbers, middleNumbers, hasAnE, longPlural
}
