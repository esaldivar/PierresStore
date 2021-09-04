import axios from "axios";
import { useState, useEffect } from "react";

const Session = () => {

	const [currentSeason, setSeason] = useState<any>([]);

	
	useEffect(() => {
		axios.get('/api/season').then((res) => {
			console.log(res.data);
			setSeason(res.data)
		}).catch((err) => {
			console.log(err);
		})
	}, [])


	return (
		<div>
			{currentSeason?.map((el, index:number) => {
				return (
					<img src={el.image_url}></img>
				)
			})}
		</div>
	)
}

export default Session;