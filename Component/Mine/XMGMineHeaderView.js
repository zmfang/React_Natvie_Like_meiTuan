import React, { Component } from 'react';
import {
   Image,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import styles from '../styles';
class XMGMineHeaderView extends React.Component
{

    _getComponents(titles){
        let components=[];
        titles.forEach((item,index)=>{
           let obj=(
               <TouchableOpacity
                   key={index}
                   style={styles.bottomItem}
                   onPress={()=>{
                       alert(item.title)
                   }}
               >
                   <Text style={{color:'white'}}>
                       {item.title}
                   </Text>
                   <Text style={{color:'white',fontSize:9}}>
                       {item.number}
                   </Text>
               </TouchableOpacity>
            );
           components.push(obj);
        });

        return components;
    }
    render(){
        return(


            <View style={ styles.MineHeaderView}>
                <TouchableOpacity
                    onPress={()=> {
                        alert("点击了我的")
                    }}
                    style={styles.headerView}
                >
                    <Image source={{uri:'see'}} style={styles.MineViewLeftImg}/>
                    <View style={styles.headerRight}>

                        <Text>饭饭饭zM</Text>
                        <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}}/>
                    </View>
                    <View>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{marginTop:29,width:8,height:13,marginRight:8}}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.bottomView}>
                    {this._getComponents([
                            {number:100, title:'优惠券'},
                            {number:12, title:'评价'},
                            {number:50, title:'收藏'}
                    ]

                    )}
                </View>
            </View>
        );
    }
}

export {XMGMineHeaderView as default};