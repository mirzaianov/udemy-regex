const data = `
joo
boo
Koo
Loo
woo
moo
zoo
coo
`;

// Character Classes With Ranges
// [a-cA-Cx] - One of the characters falling in one the ranges OR any of the choices given in square brackets - a,b,c,A,B,C,x

const test = data.match(/[j-mJ-Mz]oo/gm);

console.log(test);

/**
joo
Koo
Loo
moo
zoo
*/
