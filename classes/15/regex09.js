const data = `
joo
boo
koo
loo
woo
moo
zoo
coo
`;

// Character Classes With Ranges
// [a-cx] - One of the characters falling in the range OR any of the choices given in square brackets - a,b,c,x

const test = data.match(/[j-mz]oo/gm);

console.log(test);

/**
joo
koo
loo
moo
zoo
*/
