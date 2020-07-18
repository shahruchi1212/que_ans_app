import React from 'react';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import AddAnswer from './Components/AddAnswer'
import EditAnswer from './Components/EditAnswer'

//import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/add" component={AddAnswer} />
            <Route path = "/edit/:id" component={EditAnswer} />
            
        </Switch>
       </Router>

    </div>

  );
}

export default App;