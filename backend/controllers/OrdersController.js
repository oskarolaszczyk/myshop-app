const Order = require('../db/models/order');
const OrderStatus = require('../db/models/order-status')



async function findOne(req, res, next) {
      const orderStatus = await OrderStatus.findOne({slug : req.params.slug})
      if (!orderStatus) return res.status(404).send({message: `Order was not found` });

      const ref = orderStatus._id

      const orders = await Order.find({ orderStatus: ref }).populate({
                                                path: 'products orderStatus',
                                                populate: { path: 'product_id'}
                                                });

      if (!orders) return res.status(404).send({message: `Order was not found` });


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
      try {
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
      } catch (err) {
            return res.status(400).send({message: `Order was not created`, error: err });

      }
}

async function update(req, res, next) {
      try {
              
                  const orderStatus = await OrderStatus.findOne({slug : req.body.orderStatusID})
                  if (!orderStatus) return res.status(400).send({message: `Order was not updated21`});

                  const reference = orderStatus._id

                  let order = await Order.findOne({ _id: req.params.id});
                  if (!order) return res.status(404).send({message: `Order was not updated` });


                  const canceled = await OrderStatus.findOne({slug : "canceled"})
                  const notApproved = await OrderStatus.findOne({slug : "not-approved"})
                  const approved = await OrderStatus.findOne({slug : "approved"})
                  const completed = await OrderStatus.findOne({slug : "completed"})


                  if (order.orderStatus._id.equals(canceled._id)) 
                        return res.status(400).send({message: `Order was not updated`});

                  if (order.orderStatus._id.equals(approved._id) && (reference.equals(notApproved._id) || reference.equals(canceled._id))) 
                        return res.status(400).send({message: `Order was not updated`});

                  if (order.orderStatus._id.equals(completed._id) && (reference.equals(notApproved._id)  || reference.equals(approved._id) || reference.equals(canceled._id)))
                        return res.status(400).send({message: `Order was not updateded`});

                  const updatedOrder = await Order.updateOne(
                        {
                              _id: req.params.id
                        }, 
                        {$set: 
                        {                       
                              //TODO walidacja dla nieustawiania zlego statusu 
                              orderStatus: reference,
                            
            
                  }})


      } catch (err) {
            return res.status(400).send({message: `Order was not updated`, error: err });
      }
      
      
      

      order = await Order.findOne({ _id: req.params.id }).populate({
            path: 'products orderStatus',
            populate: { path: 'product_id'}
            });;
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