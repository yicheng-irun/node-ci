/**
 * 此文件用于webpack 跑 dev 时，启动后端js
 */

const app = require('../server/app').getServerApp({
    isDevMode: true,
});

const port = process.env.NODE_SERVER_PORT || 28888;

app.listen(port, () => {
    console.log(`node server listen in ${port}`);
});