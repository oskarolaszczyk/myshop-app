const Orders = require('../db/models/order');

async function findOne(req, res, next) {
      const order = await Order.findOne({ slug: req.params.slug });
      if (!product) return next();
      return res.status(200).send({ data: order });
}
  
async function findAll(req, res) {
      const orders = await Orders.find().sort({ createdAt: 'desc' });
      return res.status(200).send({ data: orders });
}
  
async function create(req, res) {
      const order = await new Order({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            weight: req.body.weight,
            category: req.body.categoryID,
      }).save();

      return res.status(201).send({ data: order, message: `Order was created` });
}

async function update(req, res, next) {
      const order = await Order.findOne({ slug: req.params.slug });
      if (!order) return next();
      
      
      order.date =  req.body.date
      order.orderStatus = req.body.orderStatusID
      order.userName = req.body.userName
      order.email =  req.body.email
      order.phone = req.body.phone
      order.products = req.body.products

      await song.save();

      return res.status(200).send({ data: order, message: `Order was updated` });
}
  
async function remove(req, res, next) {
      const order = await Order.findOne({ slug: req.params.slug });
      if (!order) return next();
      await order.remove();

      return res.status(200).send({ message: `Order was removed` });
}


module.exports.findOne = findOne
module.exports.findAll = findAll
module.exports.create = create
module.exports.update = update
module.exports.remove = remove 