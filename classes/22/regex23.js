const data =
`https://website
http://website
httpss://website
httpx://website
httpxx://website`;

// The Question Mark Binary
// a? - Zero or One occurences of 'a'.
// The character just preceding the question mark.

const test = data.match(/^https?:\/\/website$/gm);

console.log(test);

/**
https://website
http://website
*/
