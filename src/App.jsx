import React from 'react';
import Inicio from './components/Inicio';
import Base from './components/Base';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

 function App() {
  return (
    <Router>
      <Link to="/inicio">inicio</Link>
      <Link to="/">base</Link>



     <Switch>
       <Route exact path="/inicio/:nombre/:edad/:apellido">
         <Inicio></Inicio>
       </Route>
       <Route exact path ="/">
        <Base></Base>
       </Route>
     </Switch>

    </Router>
  );
}
export default App;
