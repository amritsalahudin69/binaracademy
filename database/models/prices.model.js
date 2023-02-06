const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class Prices extends Model{

}

Prices.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field : "id_product"
        },
    tpack: {
        type: DataTypes.STRING
        },
    hpp: {
        type: DataTypes.DOUBLE
        },
    hjp: {
        type: DataTypes.DOUBLE
        },
    avail_: {
        type: DataTypes.INTEGER
        }
    
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'prices',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= Prices;