const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class trolli extends Model{

}

trolli.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field : "id_user"
        },
    nametroll: {
        type: DataTypes.STRING
        },
    avail_: {
        type: DataTypes.INTEGER
    },
    
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'trollis',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    }
)

module.exports= trolli;