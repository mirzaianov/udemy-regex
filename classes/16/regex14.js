const data = `
x#y
x\\y
x^y
x&y
x%y
`;

// Escaping With Backlash
// The backlash itself should always be escaped with a backliash, irrespective of its position within the regex

const test = data.match(/x[#\\\^]y/gm);

console.log(test);

/**
x#y
x\y
x^y
*/
