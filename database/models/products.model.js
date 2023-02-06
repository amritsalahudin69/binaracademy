const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class Products extends Model{

}

Products.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    nameprod: {
        type: DataTypes.STRING
        },
    avail_: {
        type: DataTypes.INTEGER
        },
    code: {
        type: DataTypes.STRING
        },
    stock_: {
        type: DataTypes.INTEGER
        }
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'products',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= Products;