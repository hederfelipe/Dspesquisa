import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Record from './pages/Records';

const Routes =()=>(
 <BrowserRouter>
 <Header/>
 <Switch>
     <Route path="/" exact>
         <Home />
     </Route>

     <Route path="/">
         <Record/>
     </Route>
 </Switch>
    
 </BrowserRouter>


);
export default Routes;