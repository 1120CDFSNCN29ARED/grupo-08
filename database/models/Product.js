module.exports = function (sequelize, dataType) {
  const alias = "Products";

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataType.INTEGER,
    },
    title: {
      allowNull: false,
      type: dataType.STRING,
    },
    description: {
      allowNull: false,
      type: dataType.STRING,
    },
    image: {
      allowNull: false,
      type: dataType.STRING,
    },
    category: {
      allowNull: false,
      type: dataType.STRING,
    },
    color: {
      allowNull: false,
      type: dataType.STRING,
    },
    price: {
      allowNull: false,
      type: dataType.INTEGER,
    },
  };

  const options = {
    sync: {
      force: true,
    },
  };

  const Product = sequelize.define(alias, cols, options);

  return Product;
};
