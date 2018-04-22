import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return(
  <View style={styles.logotekstContainer}>
     <Image style={{width:100 , height:100}}
     source={require('../images/logo.png')}/>
     <Text style={styles.logoteksten}> Velkommen til erem </Text>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    logotekstContainer : {
        flexGrow :1,
         justifyContent : 'flex-end',
         alignItems : 'center'
    },
    logoteksten : {
        marginVertical : 15,
        backgroundColor : '#76ffff',
        fontSize : 30,
        color : 'rgba(31,152,152,0.8)',
        
    }
})