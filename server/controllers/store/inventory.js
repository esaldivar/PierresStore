const db = require('../../models/storeModel');

const inventory = async (req, res, next) => {
	try {
		const postQuery = await db.query('SELECT * FROM "products"');
		res.inventory = postQuery.rows;
        return next();
    } catch(err) {
        console.log('signUp error', err);
        return res.status(500).json({message: 'Could not retrieve inventory.'});
    }
  };

  module.exports = inventory;