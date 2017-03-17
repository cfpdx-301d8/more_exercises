// Returns an array with all of the strings of the passed in array
// capitalized.
//
// ['sloth', 'narwhal'] -> ['SLOTH', 'GNARWHAL']
function shouty(arr) {
  return arr.map(function(animal) {
    return animal.toUpperCase();
  });
}

// Returns an array with an s added to the end of each string
//
// ['sloth', 'bats'] -> ['sloths', 'batss']
function plural(arr) {
  return arr.map(function(animal) {
    return `${animal}s`;
  });
}


// Returns an array with capitalized strings.
//
// ['sloth', 'narwhal'] -> ['Sloth', 'Gnarwhal']
function capitalize(arr) {
  return arr.map(function(animal) {
    return `${animal.slice(0, 1).toUpperCase()}${animal.slice(1)}`;
  });
}

// **Stretch**
// Returns an array with every even word all caps and every odd word
// all lower case
//
// ['sLoth', 'bAt', 'narwhAL', 'hYrax'] -> ['SLOTH', 'bat', 'NARWHAL', 'hyrax']

function everyOther(arr) {
  var count = 0;
  return arr.map(function(animal) {
    if (count % 2 === 0) {
      count++;
      return animal.toUpperCase();
    } else {
      count++;
      return animal.toLowerCase();
    }
  });
}


module.exports = {
  shouty, plural, capitalize, everyOther
}
