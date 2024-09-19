const data = `
x#y
x:y
x^y
x&y
x%y
x-y
x,y
`;

// Escaping With Backlash
// If any of the charachters ^ OR - appear inside square brackets, it needs to be escaped with a backlash as these two characters hace spesial meaning inside square brackets

const test = data.match(/x[,\^\-#:]y/gm);

console.log(test);

/**
x#y
x:y
x^y
x-y
x,y
*/
