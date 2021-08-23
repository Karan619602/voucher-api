import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import  { Voucher } from './create voucher/voucher'
function App() {
 

  return (
  <Router>
    <div>
      <Route path='/' component={Voucher} exact/>

    </div>
  </Router>
  );
}

export default App;
