module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "visual",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true, // 主键
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pages: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "visual",
      timestamps: false,
    }
  );
