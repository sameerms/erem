import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'
import {Actions} from 'react-native-router-flux';

export default class Registrer extends Component<{}> {
    gotilbake(){
       Actions.pop();

    }
    render() {
        return(
            <View style={styles.bigblue}> 
            <Logo/>
             <Form type = "Registrer"/>
             <View style= {styles.signupTekstinnhold}>
                <Text style = {styles.signupTeksten}>Har allerede en konto? </Text>
                <TouchableOpacity onPress = {this.gotilbake}>
                <Text style = {styles.signupButton}> Logg inn </Text></TouchableOpacity>
            </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    bigblue : {
        backgroundColor: '#76ffff',
        flex : 1,
        alignItems : 'center',
        justifyContent :'center',
    },
    signupTekstinnhold : {
        flexGrow : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',
        marginVertical:16,
        flexDirection :'row'
    },
    signupTeksten : {
        fontSize : 16,
        fontWeight:'500'
    },
    signupTeksten : {
        fontSize : 16,
        
    },
    signupButton : {
        fontSize : 18,
        fontWeight:'bold'
    }
  });
