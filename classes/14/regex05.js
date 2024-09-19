const data = `
foo
moo
coo
doo
poo
loo
boo
hoo
`;

// Character Classes
// [abc] - Character class. One of the characters inside the square brackets - a, b or c

const test = data.match(/[fcl]oo/gm);

console.log(test);

/**
foo
coo
loo
*/
