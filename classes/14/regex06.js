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

const test = data.match(/[fcdplb]oo/gm);

console.log(test);

/**
foo
coo
doo
poo
loo
boo
*/
