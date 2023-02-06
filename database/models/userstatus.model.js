const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class userstatus extends Model{

}

userstatus.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    level_: {
        type: DataTypes.STRING
        },
    name_: {
        type: DataTypes.STRING
        },
    desc_: {
        type: DataTypes.STRING
        },
    avail_: {
        type: DataTypes.INTEGER
        }
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName: 'userstatuses',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= userstatus;