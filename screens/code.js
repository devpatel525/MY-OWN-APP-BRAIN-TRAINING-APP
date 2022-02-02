import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';

export default class Code extends Component {
  render() {
    
    return (
       <ImageBackground source={require('../assets/bg1.jpg')} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"cyan"}}> Code Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Code is now an integral part of everyday life</Text>
        <Text> </Text>
        <Text style={styles.points} >2)coding has us beat with over 700 coding languages in use today! </Text>
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