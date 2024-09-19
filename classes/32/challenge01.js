const data =
`bob.123@gmail.com
alice-personal@yahoo.in
admin@cloud.guru
george@yahoo
robert_at_gmail.com
steve austin@gmail.com
`;

// Another Phone Number Problem

const test = data.match(
  /^[^\s]*@[a-z]*\.[a-z]{2,}$/gm,
);

console.log(test);

/**
bob.123@gmail.com
alice-personal@yahoo.in
admin@cloud.guru
*/
