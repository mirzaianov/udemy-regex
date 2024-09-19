const data = `
lion
tiger
leopard
fox
kangaroo
bat
mouse
cuckoo
deer
`;

// Curly Braces Repiter
// a{m,n} represents at least 'm' and at most 'n' repetitions of whatever immediately precedes this, i.e. 'a'

const test = data.match(/^[a-z]{4,6}$/gm);

console.log(test);

/**
lion
tiger
mouse
cuckoo
deer
*/
