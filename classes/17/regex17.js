const data = `
foo
foo bar
baz foo
foo bar baz
baz bar foo
`;

// Anchors
// ^ is a placeholder that signifies beginning of a line.
// $ is a placeholder that signifies end of a line

const test = data.match(/^foo$/gm);

console.log(test);

/**
foo
*/
