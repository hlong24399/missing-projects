const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
   // find all tags
   Tag.findAll({
      // be sure to include its associated Product data
      attributes: ["id", "tag_name"],
      include: [
         {
            model: Product,
            attributes: ["id", "product_name", "price", "stock", "category_id"],
            through: ProductTag,
            as: "products",
         },
      ],
   })
      .then((dbTagData) => res.json(dbTagData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get("/:id", (req, res) => {
   // find a single tag by its `id`
   Tag.findOne({
      // be sure to include its associated Product data
      where: {
         id: req.params.id,
      },
      include: [
         {
            model: Product,
            attributes: ["id", "product_name", "price", "stock", "category_id"],
            through: ProductTag,
            as: "products",
         },
      ],
   })
      .then((dbTagData) => {
         if (!dbTagData) {
            // client error
            res.status(404).json({
               message: "This Tag does not match any id!",
            });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post("/", (req, res) => {
   // create a new tag
   Tag.create({
      // hold parameters sent from client
      tag_name: req.body.tag_name,
   })
      .then((dbTagData) => res.json(dbTagData))
      .catch((err) => {
         console.log(err);
         // server error
         res.status(500).json(err);
      });
});

router.put("/:id", (req, res) => {
   // update a tag's name by its `id` value
   Tag.update(req.body, {
      where: {
         id: req.params.id,
      },
   })
      // client err
      .then((dbTagData) => {
         if (!dbTagData[0]) {
            res.status(404).json({
               message: "This Tag does not match any id!",
            });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete("/:id", (req, res) => {
   // delete on tag by its `id` value
   Tag.destroy({
      where: {
         id: req.params.id,
      },
   })
      .then((dbTagData) => {
         if (!dbTagData) {
            // client err
            res.status(404).json({
               message: "This Tag does not match any id!",
            });
            return;
         }
         res.json(dbTagData);
      })
      .catch((err) => {
         console.log(err);
         // server err
         res.status(500).json(err);
      });
});

module.exports = router;
