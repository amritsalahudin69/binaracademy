const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class purcs extends Model{

}

purcs.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    id_trolli: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field :"id_trolli"
        },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field : "id_product"
        },
    codetrans:{
        type: DataTypes.STRING
    },
    grandtotal:{
        type: DataTypes.DOUBLE
        },
    qty:{
        type: DataTypes.INTEGER
        },
    avail_: {
        type: DataTypes.INTEGER
        },
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'purcs',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= purcs;