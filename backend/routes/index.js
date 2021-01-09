var express = require('express');
var router = express.Router();
const errors = require('../middlewares/errors')

const IndexController = require('../controllers/IndexController');
const ProductsContorller = require('../controllers/ProductsController');
const CategoryController = require('../controllers/CategoriesController')
const OrdersController = require('../controllers/OrdersController')
const OrderStatutesController = require('../controllers/OrderStatusesController')
/* GET home page. */
router.get('/', IndexController.home);


/* GET /categories */
router.get('/categories', errors.catchAsync(CategoryController.findAll));

/* GET /products */
router.get('/products', errors.catchAsync(ProductsContorller.findAll));
router.get('/products/:slug', errors.catchAsync(ProductsContorller.findOne));
router.post('/products', errors.catchAsync(ProductsContorller.create));
//TODO fix put method
router.put('/products/:slug', errors.catchAsync(ProductsContorller.update));

/* GET /orders */
router.get('/orders', errors.catchAsync(OrdersController.findAll));
//TODO fix put and post method
router.post('/orders', errors.catchAsync(OrdersController.create));
router.put('/orders/:id', errors.catchAsync(OrdersController.update));
//TODO add another method to get method
router.get('/orders/status/:id', errors.catchAsync(OrdersController.findOne));


/* GET /categories */
router.get('/status', errors.catchAsync(OrderStatutesController.findAll));


module.exports = router;
