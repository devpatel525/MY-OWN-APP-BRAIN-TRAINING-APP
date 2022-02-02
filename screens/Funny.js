import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
       <ImageBackground source={require('../assets/funny.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"cyan"}}> Funny Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) A crocodile cannot stick its <br/> tongue out.</Text>
        <Text> </Text>
        <Text style={styles.points} >2)It is impossible for most people<br/>to lick their own elbow.</Text>
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
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})