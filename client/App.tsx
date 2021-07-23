import './styles.css'
import IMAGE from './assets/Pierres_shop.png'

export const App = () => {
  
  let apple:string = 'apple';
  apple = true;

  return (
    <>
      <h1>Pierre's Store</h1>
      <img src={IMAGE} alt="Pierre's Store" width="300" height="200" />
    </>
  )
}
