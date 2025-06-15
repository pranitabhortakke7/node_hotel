const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/person', async(req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

router.get('/person', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch(error){
        console.error('Error fetching persons:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
});

router.get('/person/:workType', async(req, res) => {
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager' ){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}) 

router.put('/person/:id', async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL
    const updatedPersonData = req.body; // Updated data for the person

    // Assuming you have a Person model
    const updatedPerson = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,          // Return the updated document
        runValidators: true // Run Mongoose validation
      }
    );

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Send the updated person data as a JSON response
    res.json(updatedPerson);

  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;