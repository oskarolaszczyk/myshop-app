require('./mongoose')
const User = require('./models/user')
const Category = require('./models/category')

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

// findUsers()

// createCategory({
//       name: 'lenovo11'
// })
// findCategories()