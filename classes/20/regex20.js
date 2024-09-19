const data = `
ha
hahahahaha
hahaha
hahahaha
haha

hahahahahaha
hahahahahahahaha
hahahahahahahahaha
`;

// Single Ended Curly Braces Repeater
// Parenthesis () is used to group and reat as a single entity.
// {m,} represents at least 'm' repetitions of whatever immediately precedes this.

const test = data.match(/(ha){4,}/gm);

console.log(test);

/**
hahahahaha
hahahaha
hahahahahaha
hahahahahahahaha
hahahahahahahahaha
*/
