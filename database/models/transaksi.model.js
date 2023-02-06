const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class transaksi extends Model{

}

transaksi.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    id_purcstatuses: {
        type: DataTypes.INTEGER,
        allowNull : false,
        field : "id_purcstatuses"
        },
    id_user:{
        type: DataTypes.INTEGER,
        },
    codetrans:{
        type: DataTypes.STRING
    },
    total_bayar:{
        type : DataTypes.DOUBLE,
        },    
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'transaksi',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= transaksi;