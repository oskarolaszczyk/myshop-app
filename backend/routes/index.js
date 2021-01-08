var express = require('express');
var router = express.Router();
const errors = require('../middlewares/errors')

const IndexController = require('../controllers/IndexController');
const ProductsContorller = require('../controllers/ProductsController');
const CategoryController = require('../controllers/CategoriesController')


/* GET home page. */
router.get('/', IndexController.home);
router.get('/products', ProductsContorller.getAll);
router.get('/products/:id', ProductsContorller.getById);
router.post('/products', ProductsContorller.store);
router.put('/products/:id', ProductsContorller.updateById);

/* GET /categories */
router.get('/categories', errors.catchAsync(CategoryController.findAll));


module.exports = router;
