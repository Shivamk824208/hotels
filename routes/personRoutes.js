const express = require('express');
const router = express.Router();
const person = require('../person');

//post route to add a person
router.post('/person',  async(req, res) =>{
    try{
        const data = req.body //assuming the request body contains the person data

        //create a new person document using the mongoose model
       const newPerson = new person(data);

       //save the new person to the database
       const response = await newPerson.save();
       console.log('data saved successfully');
       res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'INternal server Error'});
    }
});

//get methode to get person
router.get('/person', async(req, res)=>{
    try{
         const data = await person.find();
           console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'INternal server Error'});
    }
});

router.get('/person/:workType', async(req, res)=>{
 try{
    const workType = req.params.workType;//extract the work type from the url parameters
  if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
        const response = await person.find({work: workType});
        console.log('data fetched successfully');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: 'Invalid work type'});
    }
} catch(err){
    console.log(err);
        res.status(500).json({error: 'INternal server Error'});
}
});


router.put('/person/:id', async(req, res)=>{
    try{
        const personId = req.params.id;// extract the id from the url parameters
        const updatepersonData = req.body; // updated data for the person

        const response = await person.findByIdAndUpdate(personId, updatepersonData, {
            new: true, // to return the update document
            runValidators: true, // to run validations
        });
        console.log('person data updated successfully');
        if(!response){
              return res.status(404).json({ error: 'Person not found' });
        
        }
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

router.delete('/person/:id', async(req, res)=>{
    try{
         const personId = req.params.id; //extract the id from the url parameters
         const response = await person.findByIdAndDelete(personId );
         console.log('person data deleted suuccessfully');
         if(!response){
            return res.status(404).json({error: ' person not found'});
         }
         res.status(200).json(response);
    }catch(err){
         console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})
// commod added
module.exports = router;