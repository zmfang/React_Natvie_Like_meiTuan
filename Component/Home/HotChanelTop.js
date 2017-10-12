import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import styles from '../styles';

class HotChanelTop extends React.Component
{
    constructor(props)
    {
        super(props);
        let mainTitle='';
        let deputyTitle='';
        let entranceImgUrl='';

    }
    render(){
        return(
            <View style={styles.HotChanelTop}>
                <View style={{justifyContent:'center',marginLeft:7}}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>
                        {this.props.mainTitle}
                    </Text>
                    <Text style={{color:'gray', fontSize:12}}>
                        {this.props.deputyTitle}
                    </Text>
                    <Image source={{uri:'icon_hot'}} style={{width:50,height:30,resizeMode:'contain',marginLeft:9,marginTop:5}}/>

                </View>
                <View>
                    <Image source={{uri:this.props.entranceImgUrl}} style={{width:100,height:120,resizeMode:'contain',}}/>
                </View>
            </View>
        );
    }
}

export {HotChanelTop as default};