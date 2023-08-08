import dotenv from 'dotenv';

dotenv.config();

export const ServerConfig = {
    PORT: process.env.PORT,
    DBUSER: process.env.DBUsername,
    DBPASSWORD: process.env.DBPassword,
};
