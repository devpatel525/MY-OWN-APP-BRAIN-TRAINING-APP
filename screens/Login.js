import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,ImageBackground,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import db from "../config"
export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
    
      login=async(email,password)=>{
        
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log(response)
            if(response){
              
              this.props.navigation.navigate('HomeScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            alert('enter email and password');
        }
      }

  render(){
      return(
        <ImageBackground source={require('../assets/bg1.jpg')} style={styles.bgImg}>

        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            //source={require("../assets/booklogo.jpg")}
            style={{width:200, height: 200}}/>
          <Text style={{textAlign: 'center', fontSize: 30,color:'white'}}>BRAIN TRANING APP</Text>
        </View>
        <View>
        <TextInput
          style={styles.loginBox}
          placeholder="abc@example.com"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        </View>
        <View>
          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
            <Text style={{textAlign:'center',color:'white'}}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
</ImageBackground>
      )
  }
}


const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
  }
})