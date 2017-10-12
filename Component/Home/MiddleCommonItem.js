import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import styles from '../styles';
class MiddleCommonItem extends React.Component
{
    constructor(props)
    {
        super(props);
        let title='';
        let subtitle='';
        let rightIcon='';
        let titleColor='';
        let tplurl='';//下级界面的url路径
        let callBackClickCell= null;

    }
    clickCell(data){
        // 判断处理
        if (!this.props.tplurl)
        {
           return alert(this.props.title);
        }
        // 执行回调函数
       else{

            this.props.callBackClickCell(data)
        }
    }
    render(){
        return(
            <TouchableOpacity
                onPress={()=>this.clickCell(this.props.tplurl)}
                style={styles.MiddleRightView}>
                <View>
                    <Text style={{color:this.props.titleColor,fontSize:18,fontWeight:'bold'}}>
                        {this.props.title}
                    </Text>
                    <Text style={{color:'gray',fontSize:10,alignSelf:'center'}}>
                        {this.props.subtitle}
                    </Text>
                </View>
                <Image source={{uri:this.props.rightIcon}} style={{width:70, height:43,justifyContent:'center',alignItems:'center',resizeMode:'contain'}}/>
            </TouchableOpacity>
        );
    }
}

export {MiddleCommonItem as default};