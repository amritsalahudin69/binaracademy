const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class enduser extends Model{

}

enduser.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field :"id_user"
        },
    name_: {
        type: DataTypes.STRING
        },
    idcard: {
        type: DataTypes.STRING
        },
    primephone: {
        type: DataTypes.STRING
        },
    borndate_: {
        type: DataTypes.DATE
        }
    
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName: 'endusers',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= enduser;