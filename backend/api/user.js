const router = require('express').Router()
const User = require('../models/user')

//async: necessary so that javascript doesnt compain
// that we are using await outside the async function
router.post('/new', async (req, res) => {
    const data = req.body

    try{
        // await: when we execute this function, we will
        // wait until insert many call returns
        const response = await User.insertMany(data)
        res.json({newId: response._id})
    }
    catch(err){
        res.json({error: err})
    }

})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try{
        // await: when we execute this function, we will
        // wait until insert many call returns
        const response = await User.findById(id)
        res.json({newId: response})
    }
    catch(err){
        res.json({error: err})
    }

})

module.exports = router