module.exports = (sequelize, DataTypes) => sequelize.define(
    'visual', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // 主键
            autoIncrement: true, // 自增
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pages:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'visual',
        timestamps: false
    },
);
