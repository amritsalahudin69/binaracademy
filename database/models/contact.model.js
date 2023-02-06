const { Model, DataTypes } = require ("sequelize");
const sequelize = require ('./sequelize');

class contact extends Model{

}

contact.init(
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
    nameadd: {
        type: DataTypes.STRING
        },
    addr: {
        type: DataTypes.STRING
        },
    avail_: {
        type: DataTypes.INTEGER
        }
    },
    {
        sequelize: sequelize,
        tableName:'contacts',
        timestamps: true,
        paranoid: true,
        underscored: true,
        deletedAt: 'deleted_at',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        freezeTableName: true,
    }
)

module.exports= contact;