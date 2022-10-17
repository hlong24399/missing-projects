// import models
const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// create association
// Categories have many Products
// Products belongsTo Category
Product.belongsTo(Category, {
   foreignKey: "category_id",
});

Category.hasMany(Product, {
   foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
   through: ProductTag,
   foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
   through: ProductTag,
   foreignKey: "tag_id",
});

module.exports = {
   Product,
   Category,
   Tag,
   ProductTag,
};
