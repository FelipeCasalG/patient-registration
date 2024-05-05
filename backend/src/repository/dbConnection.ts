import { Sequelize } from 'sequelize-typescript';
import * as models from '../db-models';

const config = {
    name: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
};

export const sequelize = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    models: Object.values(models),
    logging: false
});

export const initMySQLDb = async () => {
    try {
        await sequelize.authenticate();
        return true;
    } catch (error) {
        return false;
    }
};