import ReactDOM from 'react-dom'
import { App } from './containers/App'

console.log(localStorage.getItem('name'));

ReactDOM.render(<App />, document.getElementById('root'))
