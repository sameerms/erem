import React, { Component } from 'react';
import {Scene,Router,Stack} from 'react-native-router-flux';

import Login from './pages/Login';
import Registrer from './pages/Registrer';

export default class Routes extends Component<{}>{
    render(){
        return(
 <Router>
 <Stack key="root" hideNavBar={true}>
   <Scene key="login" component={Login} title="Login" initial={true}/>
   <Scene key="registrer" component={Registrer} title="Registrer"/>
 </Stack>
</Router>
 )
    }
}