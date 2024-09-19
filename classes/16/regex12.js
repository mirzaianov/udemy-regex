const data = `
x#y
x:y
x.y
x&y
x%y
`;

// Escaping With Backlash
// If a '.' is inside square brackets, it need NOT be escaped

const test = data.match(/x[#:.]y/gm);

console.log(test);

/**
x#y
x:y
x.y
*/
