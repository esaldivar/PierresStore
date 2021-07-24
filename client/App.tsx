import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import IMAGE from './assets/Pierres_shop.png';

// export interface user {
//   username: string
// }

export const App = () => {
  
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const onSubmit = (e:any) => {
     e.preventDefault();
     axios.post("/api/login", {
      data: {
        username: username,
        password: password,
      },
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('user', `${username}`)
    })
    .catch((err) => console.log(err));
   }
    return (
    <>
      <h1>Pierre's Store</h1>
      <img src={IMAGE} alt="Pierre's Store" width="300" height="200" />
        <form>
        <input
          id="taskForm"
          type="form"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="taskForm"
          type="form"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <button id="submitTask" className="submitTask" onClick={onSubmit}>Submit</button>
      </form>
       
    </>
  )
}
