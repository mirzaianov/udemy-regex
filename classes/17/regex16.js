const data = `
foo bar baz
bar foo baz
baz foo bar
bar baz foo
foo baz bar
baz bar foo
`;

// Anchors
// $ is a placeholder that signifies end of a line

const test = data.match(/.*bar$/gm);

console.log(test);

/**
baz foo bar
foo baz bar
*/
