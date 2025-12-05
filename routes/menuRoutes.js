const express = require('express');
const router = express.Router();
const  menuItem = require('../menu');

// post route to add a menu item
router.post('/menu', async(req, res)=>{
   try{
       const data = req.body //assuming the request body contains the menu item
        //create a new menuItem document using the mongoose model
       const newMenuItem = new menuItem(data);

        //save the new person to the database
        const response = await newMenuItem.save();
        console.log('menu item saved successfully');
        res.status(200).json(response);
   }catch(err){
         console.log(err);
        res.status(500).json({error: 'INternal server Error'});
   }
});


//get methode to get menu items
router.get('/menu', async(req, res)=> {
    try{
       const data = await menuItem.find();
        console.log('menu items fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
});
// comod added
module.exports = router;