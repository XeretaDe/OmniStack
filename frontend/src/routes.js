import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profiles from './Pages/Profiles';
import NewIncident from './Pages/NewIncident/index';


export default function Routes(){
return  (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}  />
                <Route path="/Register" component={Register}  />
                <Route path="/Profiles" component={Profiles}  />
                <Route path="/incidentes/new" component={NewIncident}  />
            </Switch>
        </BrowserRouter>
        )
}