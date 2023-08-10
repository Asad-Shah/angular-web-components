const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const files = [
        './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/main.js'
    ];

    await fs.ensureDir('widget');
    // files.forEach(async (file) => {
    //     const fileSplit = file.split('/');
    //     const fileName = fileSplit[fileSplit.length - 1];
    //     await fs.copyFile(file, `widget/${fileName}`);
    // });
    await concat(files, 'widget/greeting.js');
}
build();