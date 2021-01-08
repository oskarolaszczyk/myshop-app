require('./mongoose')
const User = require('./models/user')
const Category = require('./models/category')
const Product = require('./models/product')

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
            //TODO wyswietlanie zamiast id to nazwe kateogrii
            const product = await Product.find({}).populate('categories');
            console.log(product)
      } catch (error) {
            console.log(error)    
      }
}


// findUsers()

// createCategory({
//       name: 'lenovo11'
// })
// findCategories()

// createProduct({
//       name: 'Lenovo Notebook v1',
//       description: 'Super laptop',
//       price: 2200,
//       weight: 22.33,
//       categories: "5ff886269444373d401115a1"

// })

findProducts()