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
// [a-c] - One of the characters falling in the range given in square brackets - a,b,c

const test = data.match(/[j-m]oo/gm);

console.log(test);

/**
joo
koo
loo
moo
*/
