const Order = require('../db/models/order');

async function findOne(req, res, next) {
      console.log(req.params.id)
      //TODO dodac odwolanie przez sluga statusu a nie jego id 
      const orders = await Order.find({ orderStatus: req.params.id });
      //TODO ZROBIC ZEBY NIE ZWRACALO PUSTEGO TYLKO KOD BLEDU 
      if (!orders) return next();
      return res.status(200).send({ data: orders });
}
  
async function findAll(req, res) {
      const orders = await Order.find().sort({ createdAt: 'desc' })
                                          .populate({
                                                path: 'products orderStatus',
                                                populate: { path: 'product_id'}
                                                });
      return res.status(200).send({ data: orders });
}
  
async function create(req, res) {
      console.log(req.body.products)
      const order = await new Order({
            date:  req.body.date,
            orderStatus: req.body.orderStatusID,
            userName: req.body.userName,
            email: req.body.email,
            phone: req.body.phone,
            products: req.body.products,

      }).save()

      return res.status(201).send({ data: order, message: `Order was created` });
}

async function update(req, res, next) {
      let order = await Order.findOne({ _id: req.params.id });
      if (!order) return next();
      

      const updatedOrder = await Order.updateOne(
            {
                  _id: req.params.id
            }, 
            {$set: 
            {
                  //TODO walidacja dla nieustawiania zlego statusu 
                  orderStatus: req.body.orderStatusID,
                

      }})

      order = await Order.findOne({ _id: req.params.id });
      return res.status(200).send({ data: order, message: `Order was updated` });
}
  
async function remove(req, res, next) {
      const order = await Order.findOne({ _id: req.params.id });
      if (!order) return next();
      await order.remove();

      return res.status(200).send({ message: `Order was removed` });
}


module.exports.findOne = findOne
module.exports.findAll = findAll
module.exports.create = create
module.exports.update = update
module.exports.remove = remove 