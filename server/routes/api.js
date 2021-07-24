const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/testmodel');

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

router.post('/register', async (req, res) => {
    // console.log(req.body.data);
	const saltRounds = 10;
	const {username, password} = req.body.data;
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	const newUser = await User.create({
		'user': username, 
		'password': hashedPassword
	});
	res.locals.username = username;
	res.locals.password = password;
	return res.status(200).json(res.locals);
	
  }
);

module.exports = router;