import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions, Platform } from 'react-native';
// import {Permissions, Notifications} from 'expo-permissions';

import * as Notifications  from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import firebase from 'firebase';
import Logo from './components/Shared/Logo';

import CustomButton from './components/Shared/CustomButton';

const  {width, height}= Dimensions.get('window');


// useEffect={
//     this.currentUser= await firebase.auth().currentUser;
//     await this.registerForPushNotificationsAsync();
// }
// sendPushNotification=()=>{
    
// }
// useEffect(()=>{ this.currentUser= await firebase.auth().currentUser;
//     await this.registerForPushNotificationsAsync();​​​​​}​​​​​,[])

 

export default function App() {


 
   const askPermissions = async () => {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        return false;
      }
      //console.log("token********");
      return true;
      
    };
    
   const registerForPushNotifications = async () => {
      const enabled = askPermissions();
      if (!enabled) {
        return Promise.resolve();
      }
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();
      //let token= Notifications.getDevicePushTokenAsync();
      console.log(token);

      if (Platform.OS === 'ios') {
        //Notifications.setNotificationChannelAsync('default', {
          // name: 'default',
          // importance: Notifications.AndroidImportance.MAX,
          // vibrationPattern: [0, 250, 250, 250],
          // lightColor: '#FF231F7C',
        //});
        console.log("IOS")
      }
      else(Platform.OS==='android')
      {
        console.log("android")
      }
      return token;

    };

  // useEffect(() => {
  //   registerForPushNotifications();
  // }, [])


  // const registerForPushNotifications = async () => { 
  //   try {
  //      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //      if (!permission.granted) return;

  //      const token = await Notifications.getExpoPushTokenAsync();
  //     // expoPushTokensApi.register(token)
  //      console.log(token);
  //   } catch (error) {
  //     console.log('Error getting a token', error);
  //   }
  // }
  
  return (
    <View style={styles.container}>
             <View style={styles.logoContainer}>
               <Logo />
             </View>
      <Text style={{marginTop: 50}}>Do you want to enable notifications?</Text>
      <View style={{flexDirection:"row"}}>
      <CustomButton  style={styles.btn}
                     Text="No"/>
      <CustomButton  onPress={registerForPushNotifications}
                      style={styles.btn1}
                     Text="Yes"/>
       </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems: "center",
    justifyContent: "center",
    height:"30%",
    marginTop:'10%'
    },
    btn: {
      alignItems: "center",
     // justifyContent: "center",
      // textAlign:'center',
      textAlign:"justify",
      borderWidth: 1,
      width: 80,
      height: 30,
      marginBottom: 300,
      paddingLeft: 2,
      marginLeft: 10,
      marginBottom: 150,
      marginTop: 50,
    },
    btn1: {
      alignItems: "center",
     // justifyContent: "center",
      textAlign:'center',
      borderWidth: 1,
      width: 80,
      height: 30,
      marginBottom: 300,
      paddingLeft: 2,
      marginLeft: 40,
      marginBottom: 150,
      marginTop: 50,
    },
   
});
