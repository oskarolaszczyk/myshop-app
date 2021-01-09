const OrderStatus = require('../db/models/order-status')


  
async function findAll(req, res) {
      const orderStatutes = await OrderStatus.find().sort({ createdAt: 'desc' });
      return res.status(200).send({ data: orderStatutes });
}
  

module.exports.findAll = findAll