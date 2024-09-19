const data = `
fooaaaabar
fooabar
foobar
fooaabar
fooxxxbar
fooxbar
`;

// Asterisk
// *
// Zero or more occurences of 1 (single) character
const test = data.match(/fooa*bar/gm);

console.log(test);

/**
fooaaaabar
fooabar
foobar
fooaabar
 */

