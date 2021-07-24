const express = require('express');
const router = express.Router();
const { User } = require('../models/testmodel');

router.post('/login', async (req, res) => {
    // console.log(req.body.data);
	const user = await User.findOne({user:"sam"});
	console.log(`found the users ${user.user}`);
	const {username, password} = req.body.data
	res.locals.username = username;
	res.locals.password = password;
	return res.status(200).json(res.locals);
	
  }
);

module.exports = router;