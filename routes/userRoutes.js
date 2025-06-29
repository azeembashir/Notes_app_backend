const express = require('express');
const router = express.Router();

//import user schema model
const User = require('./../models/user');

// import jwt functions
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

//  post route for signup
router.post('/signup', async (req, res) => {
  try {
    const data = req.body;

    // Create new user
    const newUser = new User(data);
    const response = await newUser.save();
    console.log('User data saved');

    const payload = {
      id: response.id,
      username: response.username
    };
    console.log(JSON.stringify(payload));

    const token = generateToken(payload);
    console.log("Token is : ", token);

    res.status(200).json({ response: response, token: token });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// login route
router.post('/login', async (req, res) =>{
  try {
    // extract username and password from request body
    const {username, password} = req.body;

    // find the user by username
    const user = await User.findOne({ username });
    // if user does not exist or password does not match, return error
    console.log(username);
    
    if( !user || !(await user.comparePassword(password))){
      res.status(401).json({error: 'invalid username or password'})
    }
    console.log("successfully login");
    
    // generate token
    const payload = {
      id: user.id,
      username: user.username
    }
    const token = generateToken(payload);
    // return token as response
    res.json({token});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'internal server error'});
  }
});

module.exports = router;