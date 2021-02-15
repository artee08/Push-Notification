import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CustomButton=(props)=>{
    return(
         <View>
             <TouchableOpacity 
             style={{...styles.btnStyle,...props.style}}
             onPress={props.onPress} >
                 <Text style={{color:'white',
                               alignSelf:'center',
                               marginVertical:10,
                               fontWeight:'bold',
                               fontSize:14,
                               ...props.textstyle}}>{props.Text}</Text>
             </TouchableOpacity>
      </View>
    );
//com.lovenheal.Sample
};
const styles=StyleSheet.create({
     btnStyle:{
         borderRadius:20,
         borderWidth:1,
         backgroundColor:"#EE6E82",
         borderColor:'#EE6E82',
        // color:"#EE6E82",
        //  paddingLeft:20,
        //  paddingRight:20,
         marginVertical:5,
         justifyContent: 'center',
         alignItems: 'center'
         },
       
         
})

export default CustomButton;