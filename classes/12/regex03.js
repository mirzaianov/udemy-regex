const data = `
foobar
barfoo
fooabcbar
foobxcbar
barcbyfoo
foozbar
barafoo
barabfoo
`;

// Wildcard Asterisk Symbol
// .*
// Zero or more occurences of wildcard, which means zero or more occurences of any character
const test = data.match(/foo.*bar/gm);

console.log(test);

/**
foobar
fooabcbar
foobxcbar
foozbar
 */

