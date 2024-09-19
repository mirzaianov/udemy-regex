const data = `
fooxxxbar
foo   bar
fooxbar
fooxxbar
foo bar
foo      bar
foobar
fooyyybar
`;

// Representing Whitespaces
// \s represents 1 (single) whitespace.
// \s* represents zero or more occurences of a whitespace

const test = data.match(/foo\s*bar/gm);

console.log(test);

/**
foo   bar
foo bar
foo      bar
foobar
 */

