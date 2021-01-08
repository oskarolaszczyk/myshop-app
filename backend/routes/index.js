var express = require('express');
var router = express.Router();
const errors = require('../middlewares/errors')

const IndexController = require('../controllers/IndexController');
const ProductsContorller = require('../controllers/ProductsController');
const CategoryController = require('../controllers/CategoriesController')


/* GET home page. */
router.get('/', IndexController.home);


/* GET /categories */
router.get('/categories', errors.catchAsync(CategoryController.findAll));

/* GET /products */
router.get('/products', errors.catchAsync(ProductsContorller.findAll));
router.get('/products/:slug', errors.catchAsync(ProductsContorller.findOne));
router.post('/products', errors.catchAsync(ProductsContorller.create));
router.put('/products/:slug', errors.catchAsync(ProductsContorller.update));




module.exports = router;
