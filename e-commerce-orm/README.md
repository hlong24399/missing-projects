# Object Relational Mapping (ORM): E-commerce Back End

## Video of Deployed Project

To see a demonstration of this deployed project please see the Gifs that are included in the Assets folder (https://github.com/pciongoli/PC-commerce-site/tree/main/Assets).

## Description

The purpose of this project is to build the back end for an e-commerce site. To do this I worked with Express.js API and configured it to use Sequelize in order to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Technologies Used

- MySQL2
- Express.js
- API Routes
- RESTful CRUD Methods

### Database Models

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

### Associations

Executed association methods on Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.

* `Category` has many `Product` models.

* `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

* `Tag` belongs to many `Product` models.

### Seed the Database

Run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Created the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

## Reach out to me

- Patrick Ciongoli
- patrick.ciongoli@gmail.com

Thanks for viewing!
