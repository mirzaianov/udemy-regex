const data = `
834
519
4874
5
89
45687
25
645
`;

// Curly Braces Repiter
// a{m} represents exactly 'm' repetitions of whatever immediately precedes this, i.e. 'a'

const test = data.match(/^[0-9]{3}$/gm);

console.log(test);

/**
834
519
645
*/
