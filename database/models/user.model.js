const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class user extends Model{

}

user.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    useremail: {
        type: DataTypes.STRING
        },
    username: {
        type: DataTypes.STRING
        },
    userpass: {
        type: DataTypes.STRING
        },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field : "id_status"
        },
    avail_: {
        type: DataTypes.INTEGER
        },
    desc_: {
        type: DataTypes.STRING
        }
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= user