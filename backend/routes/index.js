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
router.put('/products/:slug', errors.catchAsync(ProductsContorller.update));

/* GET /orders */
router.get('/orders', errors.catchAsync(OrdersController.findAll));
router.post('/orders', errors.catchAsync(OrdersController.create));
router.put('/orders?fields=id,status', errors.catchAsync(OrdersController.update));
router.get('/orders/status/:id', errors.catchAsync(OrdersController.findAll));


/* GET /categories */
router.get('/status', errors.catchAsync(OrderStatutesController.findAll));


module.exports = router;
