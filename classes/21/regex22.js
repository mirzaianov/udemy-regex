const data =
`fooaaaabar
fooabar
foobar
fooaabar
fooxxxbar
fooxbar`;

// The Plus Repeater
// a+ - One or more occurences of 'a'.
// The character just preceding the plus symbol.

const test = data.match(/^fooa+bar$/gm);

console.log(test);

/**
fooaaaabar
fooabar
fooaabar
*/
