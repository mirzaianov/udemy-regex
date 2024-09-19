const data =
`1280x720
1920x1080
1600x900
1280x1024
800x600
1024x768`;

// The Monitor Resolution Problem

const test = data.replace(/(\d+)x(\d+)/g, "$1 pix by $2 pix");

console.log(test);

/**
1280 pix by 720 pix
1920 pix by 1080 pix
1600 pix by 900 pix
1280 pix by 1024 pix
800 pix by 600 pix
1024 pix by 768 pix
*/
