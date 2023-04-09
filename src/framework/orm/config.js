export default {
    local: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT,
    }
};
