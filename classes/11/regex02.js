const data = `
fooabar
fooxbar
baryfoo
foobar
fooxybar
foocbar
`;

// Wildcard Symbol
// .
// Any 1 (single) character
const test = data.match(/foo.bar/gm);

console.log(test);

/**
fooabar
fooxbar
foocbar
 */

