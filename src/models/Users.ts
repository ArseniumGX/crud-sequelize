import { DataTypes, Model, Sequelize } from "sequelize/types";

const sequelize = new Sequelize("sqlite:memory")

class User extends Model{ }

User.init({
    name: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    sexo: DataTypes.CHAR,
    isAdmin: DataTypes.BOOLEAN
}, { sequelize, modelName: 'user' })
