const fs = require('fs');
const path = require('path');



module.exports = {
    name: 'Shell',

    // 服务端相应事件的执行者
    actions: require('./actions'),


    dependJS: [],
    dependCSS: ['style.css'],
    
    // 前端部分的js
    clientScript: fs.readFileSync(path.resolve(__dirname, './client.js')).toString(),
};
