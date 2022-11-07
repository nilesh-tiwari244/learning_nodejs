const path = require('path');

// return a platform specific separator
console.log(path.sep);

// works even with redudant /
const filepath=path.join('/content//','subfolder','text.txt');
console.log(filepath);

const basename=path.basename(filepath);
console.log(basename);

const absolute =path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);

