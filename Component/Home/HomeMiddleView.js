import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import MiddleCommonItem from './MiddleCommonItem';
import TopMiddleData from '../../LocalData/HomeTopMiddleLeft.json';
class HomeMiddleView extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    renderRightView()
    {
       let itemArr=[];
       let rightData=TopMiddleData.dataRight;
       rightData.forEach((data,index)=>{
           let obj=(
               <MiddleCommonItem
               key={index}
               title={data.title}
               subtitle={data.subTitle}
               rightIcon={data.rightImage}
               titleColor={data.titleColor}
               />
           );
           itemArr.push(obj);
           }
       );
        return itemArr;
    }
    render(){
        let data=TopMiddleData.dataLeft[0];
        return(
            <View style={{ marginTop:15, flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={()=>{
                        alert(data.title)
                    }}
                    style={styles.leftMiddleStyle}
                >
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
                    <Text style={{color:'gray'}}>
                        {data.title}
                    </Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{color:'#50edd9',marginRight:5}}>
                            {data.price}
                        </Text>
                        <Text style={{color:'orange',backgroundColor:'yellow',fontSize:9,marginTop:7,fontWeight:'bold'}}>
                            {data.sale}
                        </Text>
                    </View>
                </TouchableOpacity>

                <View>
                    {this.renderRightView()}
                </View>

            </View>
        );
    }
}

export {HomeMiddleView as default};