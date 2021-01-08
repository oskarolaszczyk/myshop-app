const Category = require('../db/models/category')

async function findOne(req, res, next) {
      const category = await Category.findOne({ slug: req.params.slug });
      if (!category) return next();
      return res.status(200).send({ data: category });
}
  
async function findAll(req, res) {
      const categories = await Category.find().sort({ createdAt: 'desc' });
      return res.status(200).send({ data: categories });
}
  
async function create(req, res) {
      const song = await new Category({
            title: req.body.title
      }).save();

      return res.status(201).send({ data: category, message: `Category was created` });
}

async function update(req, res, next) {
      const category = await Category.find({ 'slug': req.params.slug });
      if (!category) return next();
      
      
      category.title = req.body.title;
      await song.save();

      return res.status(200).send({ data: category, message: `Category was updated` });
}
  
async function remove(req, res, next) {
      const category = await Category.findOne({ 'slug': req.params.slug });
      if (!category) return next();
      await category.remove();

      return res.status(200).send({ message: `Category was removed` });
}


module.exports.findOne = findOne
module.exports.findAll = findAll
module.exports.create = create
module.exports.update = update
module.exports.remove = remove 