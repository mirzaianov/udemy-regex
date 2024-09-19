const data = `
foo bar baz
bar foo baz
baz foo bar
bar baz foo
foo baz bar
baz bar foo
`;

// Anchors
// ^ is a placeholder that signifies beginning of a line.
// The interpretation of ^ differs within square brackets and outside of it.
// Inside square brackets, ^ stands for negation.
// Outside, it is a placeholder for beginning of line.

const test = data.match(/^foo.*/gm);

console.log(test);

/**
foo bar baz
foo baz bar
*/
