const data =
`ha
haha
hahahahaha
hahahaha
hahaha
hahahahahahaha
hahahahahaha`;

// Single Ended Curly Braces Repeater
// Parenthesis () is used to group and reat as a single entity.
// {0,n} represents at most 'n' repetitions of whatever immediately precedes this.

const test = data.match(/^(ha){0,2}$/gm);

console.log(test);

/**
ha
haha
*/
