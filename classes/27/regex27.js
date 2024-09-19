const data =
`7:32
6:12
12:23
1:23
11:33
4:21`;

// The Clock Time Problem

const test = data.replace(/([0-9]{1,2}):([0-9]{2})(\n)/gm, "$2 mins past $1$3");

console.log(test);

/**
32 mins past 7
12 mins past 6
23 mins past 12
23 mins past 1
33 mins past 11
21 mins past 4
*/
