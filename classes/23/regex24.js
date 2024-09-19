const data =
`sapwood
rosewood
logwood
teakwood
plywood
redwood`;

// Making Choices With Pipe
// (a|b) represents either a or b, where a nd b can be multi-character strings

const test = data.match(/^(log|ply)wood$/gm);

console.log(test);

/**
logwood
plywood
*/
