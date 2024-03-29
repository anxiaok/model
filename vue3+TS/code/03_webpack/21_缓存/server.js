/**
 * 服务器代码
 *  启动服务器指令：
 *      cnpm i -g nodemon
 *      nodemon server.js
 *      node server.js
 */
const express = require('express');
const app = express();
app.use(express.static('build',{maxAge:1000*3600}));
app.listen(3000);