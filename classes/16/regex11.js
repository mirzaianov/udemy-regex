const data = `
xxx.yy
xx.yyyy
x.yy
xy
xxyy
yyxx
yx
yxxx
`;

// Escaping With Backlash
// Following characters should be escaped with a backlas as these characters have spacial meaning otherwise: ^ $ * . [ ( ) \

const test = data.match(/x*\.y*/gm);

console.log(test);

/**
xxx.yy
xx.yyyy
x.yy
*/
