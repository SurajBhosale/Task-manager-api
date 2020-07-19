require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5efacc18c0027955dcf7d4f0').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5ef6f176655d1a46fcb20433').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})