const data =
`914.582.3013
873.334.2589
521.589.3147
625.235.3698
895.568.2145
745.256.3369`;

// The Clock Time Problem

const test = data.replace(/[0-9]{3}\.[0-9]{3}\.([0-9]{4})(\n?)/gm, "xxx.xxx.$1$2");

console.log(test);

/**
xxx.xxx.3013
xxx.xxx.2589
xxx.xxx.3147
xxx.xxx.3698
xxx.xxx.2145
xxx.xxx.3369
*/
