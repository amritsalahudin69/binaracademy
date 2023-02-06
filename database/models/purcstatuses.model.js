const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class purcstatuses extends Model{

}

purcstatuses.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    namestatus: {
        type: DataTypes.STRING
        },
    deskripsi: {
        type: DataTypes.STRING
        }
    },    
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'purcstatuses',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= purcstatuses