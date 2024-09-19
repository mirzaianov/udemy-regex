const data =
`Jan 5th 1987
Dec 26th 2010
Mar 2nd 1923
Oct 1st 2008
Aug 3rd 2009
Jun 10th 2001`;

// The Date Problem

const test = data.replace(
  /([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})(\n?)/gm,
  "$2-$1-$3$4"
);

console.log(test);

/**
5-Jan-87
26-Dec-10
2-Mar-23
1-Oct-08
3-Aug-09
10-Jun-01
*/
