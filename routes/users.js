const express = require("express")
const User = require('../models/user')
const router = express.Router();

// Getting all
router.get('/', async (req,res)=>{

    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){ 
        res.status(500).json({ message: err.message })
    }
})

// Getting One 
router.get('/:id',getUser, (req,res)=>{
    res.json(res.user)
})

// Creating One 
router.post('/',async (req,res)=>{
    const user = new User({
        name: req.body.name,
        userToPlatform: req.body.userToPlatform,
        
        
    })
    try{
        const newUser = await user.save();
        res.status(201).json(newUser) 
    }catch(err){
        res.status(500).json
    }

})


// Updating One
router.patch('/:id',getUser,async (req, res)=>{
    if (req.body.name != null) {
        res.user.name = req.body.name
      }
      if (req.body.userToPlatform != null) {
        res.user.userToPlatform = req.body.userToPlatform
      }
      try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }

})

// Deleting One
router.delete('/:id',getUser, async(req,res)=>{
    try{
        await res.user.remove()
        res.json({message: "Deteletd User"})
    } catch (err) {
        res.status(500).json({ message: err.message })
      }
})


async function getUser(req,res,next){
    let user
    
    try{
        user = await User.findById(req.params.id)
        if(user==null){
            return res.status(405).json({ message: "No user"})
        }
    }
    catch(err){
       return res.status(500).json({message: err.message})

    }

    res.user = user;
    next()
    

}

module.exports = router 