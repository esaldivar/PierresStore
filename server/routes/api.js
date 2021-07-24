const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
    console.log(req.body.data);
	const {username, password} = req.body.data
	res.locals.username = username;
	res.locals.password = password;
	return res.status(200).json(res.locals);
  }
);

module.exports = router;