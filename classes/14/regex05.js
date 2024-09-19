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

const test2 = data.match(/[fcdplb]oo/gm);

console.log(test2);

/**
foo
coo
doo
poo
loo
boo
*/

const test3 = data.match(/[^mh]oo/gm);

console.log(test3);

/**
foo
coo
doo
poo
loo
boo
*/