module.exports = (sequelize, DataTypes) => sequelize.define(
    'goods', {
        goods_id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // 主键
            autoIncrement: true, // 自增
        }
    }, {
        tableName: 'goods',
        timestamps: false
    },
);