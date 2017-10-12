import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import MiddleData from './MiddleData.json';
class MineMiddlView extends React.Component {

    _getApexComponents=(titles)=>{
        let components=[];
        titles.forEach((item,index)=>{
            let obj=(
                <TouchableOpacity
                    key={index}
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        // borderWidth:1,
                    }}
                    onPress={()=>
                    {
                        alert(item.title)
                    }
                    }
                >
                    {/*<TouchableOpacity*/}
                        {/*onPress={()=>{*/}
                            {/*alert(item.title)*/}
                        {/*}}*/}
                    {/*>*/}
                        <View>
                            <Image source={{uri:item.iconName}}  style={{width:44,height:33,marginTop:3}}/>
                        </View>
                        <View >
                            <Text style={{fontSize:10,marginTop:2,marginBottom:2}}>
                                {item.title}
                            </Text>
                        </View>
                    {/*</TouchableOpacity>*/}
                </TouchableOpacity>

            );
            components.push(obj);
        });
        return components;


    };
    render(){

        return(
            <View style={styles.MineMiddView}>
                {
                    this._getApexComponents(MiddleData
                    )}

            </View>
        )
    }
}


export {MineMiddlView as default};