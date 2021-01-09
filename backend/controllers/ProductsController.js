const Product = require('../db/models/product');

async function findOne(req, res, next) {
      const product = await Product.findOne({ slug: req.params.slug });
      if (!product) return next();
      return res.status(200).send({ data: product });
}
  
async function findAll(req, res) {
      const products = await Product.find().sort({ createdAt: 'desc' })
                                          .populate('category','-slug -createdAt -updatedAt -__v');
      return res.status(200).send({ data: products });
}
  
async function create(req, res) {
      const product = await new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            weight: req.body.weight,
            category: req.body.categoryID,
      }).save();

      return res.status(201).send({ data: product, message: `Product was created` });
}

async function update(req, res, next) {
      const product = await Product.findOne({ slug: req.params.slug });
      if (!product) return next();
      
      product.upda
      product.name =  req.body.name
      product.description = req.body.description
      product.price = req.body.price
      product.weight =  req.body.weight,
      product.category = req.body.categoryID

      

     await product.save();

      return res.status(200).send({ data: product, message: `Product was updated` });
}
  
async function remove(req, res, next) {
      const product = await Product.findOne({ slug: req.params.slug });
      if (!product) return next();
      await product.remove();

      return res.status(200).send({ message: `Product was removed` });
}


module.exports.findOne = findOne
module.exports.findAll = findAll
module.exports.create = create
module.exports.update = update
module.exports.remove = remove 