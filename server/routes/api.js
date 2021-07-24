const express = require('express');
const router = express.Router();
const register = require('../controllers/authentication/register');


router.post('/login', async (req, res) => {
    // console.log(req.body.data);
	const user = await User.find();
	console.log(`found the users ${user}`);
	const {username, password} = req.body.data
	res.locals.username = username;
	res.locals.password = password;
	return res.status(200).json(res.locals);
	
  }
);

router.post('/register', register, (req, res) => {
	return res.status(200).json({message: 'You successfully signed up!'});
  });

module.exports = router;