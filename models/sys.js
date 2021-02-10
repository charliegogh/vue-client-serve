module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        "sys_menus",
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true, // 主键
            },
            pid: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "sys_menus",
            timestamps: false,
        }
    );
