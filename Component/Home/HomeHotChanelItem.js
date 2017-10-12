import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
} from 'react-native';
import styles from '../styles';
 class  HomeHotChanelItem extends React.Component
{
    constructor(props)
    {
        super(props);
        let title='';
        let subTitle='';
        let hotImage='';


    }
    render(){
        return(
                <View style={{justifyContent:'center',flex:1,borderColor:'white',borderWidth:2}}>
                    <Text style={{fontSize:17,fontWeight:'bold',alignSelf:'center'}}>
                        {this.props.title}
                    </Text>
                    <Text style={{color:'gray', fontSize:12,alignSelf:'center'}}>
                        {this.props.subTitle}
                    </Text>
                    <Image source={{uri:this.props.hotImage}} style={{alignSelf:'center',width:120,height:60,resizeMode:'contain',marginTop:5,}}/>

                </View>

        );
    }
}
export {HomeHotChanelItem as default};
