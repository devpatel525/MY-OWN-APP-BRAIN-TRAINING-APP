import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';

export default class Nature extends Component {
  render() {
    return (
 <ImageBackground source={require('../assets/nature.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"cyan"}}> Nature Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) The largest ocean on Earth is  <br/>the Pacific Ocean.</Text>
        <Text> </Text>
        <Text style={styles.points} >2) The largest land based <br/> mammals on Earth are elephants. </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"blue"}}>Back</Text>
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
    color:"yellow",
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