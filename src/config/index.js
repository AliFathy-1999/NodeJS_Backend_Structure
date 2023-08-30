const dotenv = require('dotenv');
dotenv.config();
const { PORT,DB_USERNAME,DB_PASSWORD,DB_NAME } = process.env
const config = {
    app: {
        port: PORT || 4000
    },
    db: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        name: DB_NAME,
    },
};


module.exports = config;