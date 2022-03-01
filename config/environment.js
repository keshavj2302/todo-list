

const fs = require('fs');

console.log('******');

const rfs = require('rotating-file-stream');

console.log('#######');

const path = require('path');



const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs('access.log',{
    interval: '1d',
    path:logDirectory
});

const development = {
    name:'development',
    assets_path: '/assets',
    secret_key: 'keshav',
    db:'Todo_list',
    morgan:{
        mode:'dev',
        options: {stream: accessLogStream}
    }
}

const production = {
    name: 'production',
    assets_path: process.env.ASSETS_PATH,
    secret_key: process.env.JWT_secret,
    db: process.env.db,
    morgan:{
        mode:'combined',
        options: {stream: accessLogStream}
    }
}

module.exports = eval(process.env.NAME)==undefined?development:production;