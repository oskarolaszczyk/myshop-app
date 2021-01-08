require('./mongoose')
const User = require('./models/user')

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

findUsers()