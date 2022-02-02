import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      
       <ImageBackground source={require('../assets/bg.jpg')} style={styles.bgImg}>
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Science')}>
              <Text style={{ fontSize:20, color:"yellow"}}>Science Facts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Math')}>
              <Text style={{ fontSize:20, color:"yellow"}}>Math facts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Nature')}>
              <Text style={{ fontSize:20, color:"yellow"}}>Nature Facts</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Funny')}>
              <Text style={{ fontSize:20, color:"yellow"}}>Funny Facts</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Code')}>
              <Text style={{ fontSize:20, color:"yellow"}}>Code Facts</Text>
            </TouchableOpacity>
          </View>
       
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"black",
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
