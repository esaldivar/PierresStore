const db = require('../../models/storeModel');

const season = async (req, res, next) => {

	const date = new Date(); 

	let season = '';

	if(date.getMonth() > 1 && date.getMonth() < 5 ){
		season = 'Spring';
	} else if(date.getMonth() > 4 && date.getMonth() < 7){
		season = 'Summer';
	} else if(date.getMonth() > 6 && date.getMonth() < 9){
		season = 'Fall';
	} else {
		season = 'Winter';
	}


	try {
		const postQuery = await db.query(`SELECT * FROM products
		WHERE '${season}'=ANY(season);`);
		res.season = postQuery.rows;
        return next();
    } catch(err) {
        console.log('season error', err);
        return res.status(500).json({message: 'Could not retrieve inventory.'});
    }
  };

  module.exports = season;