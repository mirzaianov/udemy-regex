const data =
`John Wallace
Steve King
Martin Cook
Adam Smith
Irene Peter
Alice Johnson`;

// The First Name Last Name Problem

const test = data.replace(/([a-zA-Z]+)\s([a-zA-Z]+)(\n?)/gm, "$2,$1$3");

console.log(test);

/**
Wallace,John
King,Steve
Cook,Martin
Smith,Adam
Peter,Irene
Johnson,Alice
*/
