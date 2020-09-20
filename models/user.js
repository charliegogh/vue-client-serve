module.exports = (sequelize, DataTypes) => sequelize.define(
    'sys_user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: DataTypes.STRING,
        headImgUrl: DataTypes.STRING
    },
    {
        tableName: 'sys_user',
        timestamps: false
    },
);
