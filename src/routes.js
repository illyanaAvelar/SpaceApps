import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Inicial from './Inicial';
import Marvin from './Marvin';
import StateData from './StateData';
import Project from './Project';
import PickDate from './PickDate';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Inicial} />
                <Route path = "/marvin"  component = {Marvin} />
                <Route path = "/statedata"  component = {StateData} />
                <Route path = "/project"  component = {Project} />
                <Route path = "/pickdate"  component = {PickDate} />
            </Switch>
        </BrowserRouter>
    )
}