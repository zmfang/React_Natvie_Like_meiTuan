import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import styles from '../styles';
class HomeMiddleTopView extends React.Component
{
    constructor(props)
    {
        super(props);
        let title='';
        let subtitle='';
        let rightIcon='';


    }
    render(){
        return(
            <TouchableOpacity
                onPress={()=>alert(this.props.title)}
                style={styles.MiddleTopView}>
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'orange'}}>
                        {this.props.title}
                    </Text>
                    <Text style={{color:'gray',fontSize:10,alignSelf:'center'}}>
                        {this.props.subtitle}
                    </Text>
                </View>
                <Image source={{uri:this.props.rightIcon}} style={{width:110, height:120,justifyContent:'center',alignItems:'center',resizeMode:'contain'}}/>
            </TouchableOpacity>
        );
    }
}

export {HomeMiddleTopView as default};