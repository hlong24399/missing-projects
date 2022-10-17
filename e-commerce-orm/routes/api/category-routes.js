const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
   // find all categories
   // be sure to include its associated Product

   Category.findAll({
      attributes: ["id", "category_name"],
      include: [
         {
            model: Product,
            attributes: ["id", "product_name", "price", "stock", "category_id"],
         },
      ],
   })

      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
   // const categoriesData = Category.findAll({
   //   include: [ {model: Product}]
   // });
});

router.get("/:id", (req, res) => {
   // find one category by its `id` value
   // be sure to include its associated Products
   Category.findOne({
      where: {
         id: req.params.id,
      },
      include: {
         model: Product,
         attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
   })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({
               message: "This Category does not match any id!",
            });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post("/", (req, res) => {
   // create a new category
   Category.create({
      category_name: req.body.category_name,
   })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put("/:id", (req, res) => {
   // update a category by its `id` value
   Category.update({
      category_name: req.body.category_name,
   })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({
               message: "This Category does not match any id!",
            });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.json(err);
      });
});

router.delete("/:id", (req, res) => {
   // delete a category by its `id` value
   Category.destroy({
      where: {
         id: req.params.id,
      },
   })
      .then((dbCategoryData) => {
         if (!dbCategoryData) {
            res.status(404).json({
               message: "This Category does not match any id!",
            });
            return;
         }
         res.json(dbCategoryData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;
