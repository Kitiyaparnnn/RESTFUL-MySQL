const { Sequelize, DataTypes,Model } = require('sequelize');
const sequelize = new Sequelize('sqlite:db.sqlite');

// interface UserModel {
//     id?: number
//     status: string
//     name: string
//     address: string
//     picture: binary
//     package: string

// }
class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    picture: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
    },
    package: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},{sequelize,mpdelName: 'User'})

module.exports = {User,sequelize}