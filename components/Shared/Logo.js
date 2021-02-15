import React from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
import Logo from '../../assets/LNH-LOGO_TM.png';




const LogoComponent = (props) => {

    return(
        // <View style={{
        //     // marginVertical:30,
        //     ...style.logoContainer,
        //               ...props.style1}}
        //     >
            <View style={{
                //  borderWidth:6,
                //  borderColor:'pink',
                 height:'100%',
                 alignItems:'center',
                 justifyContent:'center'
            }}>
             <Image 
             source={Logo} 
                     resizeMode='contain' 
                    style={{ 
                        //   width:220,height:220,resizeMode:'contain',...props.style_image,
                        height: '80%'
                            // width: Dimensions.get('window').width,
                            // height: Dimensions.get('window').height
                           }} />
                <Text style={style.text}>{props.text}</Text> 
            </View>
             
        // </View>
    );
}

export default LogoComponent;

const style = StyleSheet.create({
    // logoContainer: {
    //     // flex:1, 
    //     height:'35%',
    //     // height:Dimensions.get('window').height * (0.3),
    //     // flex:0.6,
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     // marginRight: 5,
    //     borderWidth:2,
    //     borderColor:'red'
    // },
    text:{
        alignSelf:'center',
        color:'#EE6E82',
        letterSpacing:2,
        top:5,
        fontWeight:'bold',
        fontSize:20
    }
})