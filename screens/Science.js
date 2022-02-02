import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';

export default class Science extends Component {
  render() {
    return (
       <ImageBackground source={require('../assets/science.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"cyan"}}> Science Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) The axis of the earth is <br/> tilted at an angle of 23 degrees.</Text>
        <Text> </Text>
        <Text style={styles.points} >2) Elephants stay pregnant for  <br/> 22 months.</Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20,
    color:"white",
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"cyan",
    margin: 10,
    width: 200,
    height: 50,
  }
})