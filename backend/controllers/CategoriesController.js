const Category = require('../db/models/category')


  
async function findAll(req, res) {
      const categories = await Category.find().sort({ createdAt: 'desc' });
      return res.status(200).send({ data: categories });
}
  

module.exports.findAll = findAll
