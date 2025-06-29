const express = require('express');
const router = express.Router();

//import notes schema model
const Notes = require('./../models/notes');

// import jwt functions
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

// route to add notes
router.post('/create', jwtAuthMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNotes = new Notes({
      title,
      content,
      user: req.user.id  
    });

    const response = await newNotes.save();
    console.log('Note created for user:', req.user.id);
    res.status(201).json(response);  

  } catch (err) {
    console.log('Create note error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// route to get notes
router.get('/', jwtAuthMiddleware, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    console.log(notes);
    console.log('User ID used for query:', req.user.id);
    res.status(200).json({ notes });
  } catch (err) {
    console.error('Error in GET /notes:', err);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// route for update
router.put('/:userId', async (req, res) =>{
    try {
        const userId = req.params.userId; //extract the id from url parameter
        const notesUpdatedData = req.body;  //updated data for the person
        const response = await Notes.findByIdAndUpdate(userId, notesUpdatedData, {
            new: true,  //return the updated document
            runValidators: true     //run mongoose validation
        });

        if(!response){
            res.status(403).json({error: 'data not found'});
        }

        console.log('Notes data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
});

// router for delete
router.delete('/:userId', async (req, res) =>{
    try {
        const userId = req.params.userId;
        const response = await Notes.findByIdAndDelete(userId);
        console.log('Data deleted');
        res.status(200).json({message: 'data deleted successfully'});
        
    } catch (error) {
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
});
module.exports = router;
