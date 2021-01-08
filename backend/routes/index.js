var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/IndexController');
const ProductsContorller = require('../controllers/ProductsController');


/* GET home page. */
router.get('/', IndexController.home);
router.get('/products', ProductsContorller.getAll);
router.get('/products/:id', ProductsContorller.getById);
router.post('/products', ProductsContorller.store);
router.put('/products/:id', ProductsContorller.updateById);

module.exports = router;
