const Product = require('../db/models/product');

async function findOne(req, res, next) {
      const product = await Product.findOne({ slug: req.params.slug }).populate('category','-slug -createdAt -updatedAt -__v');
      if (!product) return next();
      return res.status(200).send({ data: product });
}
  
async function findAll(req, res) {
      const products = await Product.find().sort({ createdAt: 'desc' })
                                          .populate('category','-slug -createdAt -updatedAt -__v');
      return res.status(200).send({ data: products });
}
  
async function create(req, res) {
      try {
            const product = await new Product({
                  name: req.body.name,
                  description: req.body.description,
                  price: req.body.price,
                  weight: req.body.weight,
                  category: req.body.category,
            }).save();

            return res.status(201).send({ data: product, message: `Product was created` });

      } catch (err) {
            return res.status(400).send({message: `Product was not created, bad request`, error: err});
      }
}

async function update(req, res, next) {
      let product = await Product.findOne({ slug: req.params.slug });
      if (!product) return res.status(404).send({message: `Product was not updated, bad request`});

      const query = {
            slug: req.params.slug
      }
      const update = {$set: {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            weight: req.body.weight,
            category: req.body.categoryID
      }}
      const options = {runValidators: true}

      try {
            const updatedProduct = await Product.updateOne(query, update, options)
            product = await Product.findOne({ slug: req.params.slug });
            return res.status(200).send({ data: product, message: `Product was updated` });
      } catch (err) {
                        return res.status(400).send({message: `Product was not created, bad request`, error: err});
      }
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