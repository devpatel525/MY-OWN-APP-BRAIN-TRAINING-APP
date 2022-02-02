import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';

export default class Math extends Component {
  render() {
    return (
       <ImageBackground source={require('../assets/bg1.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"cyan"}}> Math Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) An Icosagon is a shape with <br/> 20 sides.</Text>
        <Text> </Text>
        <Text style={styles.points} >2)There are 86,400 seconds in <br/> a day.</Text>
        <TouchableOpacity
              style={styles.buttons}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
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