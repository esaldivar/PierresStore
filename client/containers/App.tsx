import '../style.scss';
import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import Store from './Store';
import Session from './Session';

export const StoreContext = createContext<any>(null);

export const App:React.FC = () => {
  
  const [store, getStore] = useState<any>([]);

	useEffect(() => {
		axios.get('/api/inventory')
		.then((res)=>{
			getStore(res.data.sort((a:any,b:any) => {
				const nameA = a.product_name.toUpperCase();
				const nameB = b.product_name.toUpperCase();
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
			}));
		}).catch((err)=> {
			console.log(err);
		});
	}, [])

    return (
    <div>
      <StoreContext.Provider  value={{store,getStore}}>
        <NavBar />
        <Store />
      </StoreContext.Provider>
    </div>
  )
}
