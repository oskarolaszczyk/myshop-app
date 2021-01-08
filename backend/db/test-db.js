//TODO rozlozyc ten plik na inne pliki

require('./mongoose')
const User = require('./models/user')
const Category = require('./models/category')
const Product = require('./models/product')
const OrderStatus = require('./models/order-status')
const Order = require('./models/order')
const products = require('../data/ProductData')

const createUser = async (data) => {
      try {
            const user = new User(data)
            await user.save()
            console.log(user)
      } catch (err) {
            console.log(err)
      }
}

const findUsers = async () => {
      try {
            const users = await User.find({})
            console.log(users)
      } catch (error) {
            console.log(error)    
      }
}


const createCategory = async (data) => {
      try {
            const category = new Category(data)
            await category.save()
            console.log(category)
      } catch (err) {
            console.log(err)
      }
}

const findCategories = async () => {
      try {
            const category = await Category.find({})
            console.log(category)
      } catch (error) {
            console.log(error)    
      }
}

const createProduct = async (data) => {
      try {
            const product = new Product(data)
            await product.save()
            console.log(product)
      } catch (err) {
            console.log(err)
      }
}

const findProducts = async () => {
      try {
            const product = await Product.find({}).populate('category','-slug -createdAt -updatedAt -__v');
            console.log(product)
      } catch (error) {
            console.log(error)    
      }
}

const createOrder= async (data) => {
      try {
            const order = new Order(data)
            await order.save()
            console.log(order)
      } catch (err) {
            console.log(err)
      }
}

const findOrders = async () => {
      try {
            //TODO wyswietlanie zamiast id to nazwe produktow 
            const orders = await Order.find({}).populate("products product_id");
            console.log(orders)
      } catch (error) {
            console.log(error)    
      }
}


const createOrderStatus= async (data) => {
      try {
            const orderStatus = new OrderStatus(data)
            await orderStatus.save()
            console.log(orderStatus)
      } catch (err) {
            console.log(err)
      }
}

const findOrderStatuses = async () => {
      try {
            const orderStatus = await OrderStatus.find({});
            console.log(orderStatus)
      } catch (error) {
            console.log(error)    
      }
}


// createProduct({
//       name: 'Lenovo Notebook v1',
//       description: 'Super laptop',
//       price: 2200,
//       weight: 22.33,
//       category: "5ff89fbca617ea48413b4ad8"

// })

// findProducts()


// createOrder({
//       date: '2002-12-09',
//       orderStatus: "5ff8a01cd46aeb48742770f0",
//       userName: 'oskar1',
//       email: 'oskar@gmail.com',
//       phone: '671999887',
//       products: {product_id: "5ff8a0ae39d85348dddf5972", count: 2}
// })
// findOrders()
// createOrderStatus({name: 'not approved'})
// createOrderStatus({name: 'approved'})
// createOrderStatus({name: 'canceled'})
// createOrderStatus({name: 'completed'})


// createCategory({ name: 'laptop'})
// createCategory({ name: 'phone'})
// createCategory({ name: 'pc'})
