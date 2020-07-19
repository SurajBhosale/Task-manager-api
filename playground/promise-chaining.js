require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5efd661d78e1bb5d4c594e85', {age: 19}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 19})
// }).then((result) => {
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5efac6490615490ba8919e6c', 19).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})