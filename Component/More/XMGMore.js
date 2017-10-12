import React, { Component } from 'react';
import {

    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,


} from 'react-native';
import styles from '../styles';
import CommonCell from './CommonCell';

class XMGMore extends React.Component
{

    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell title='扫一扫'/>
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                        <CommonCell title='消息提醒'/>
                        <CommonCell title='邀请还有使用美团'/>

                        <CommonCell title='清空缓存' rightTitle='1.99M'/>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='问卷调查'/>
                        <CommonCell title='支付帮助'/>
                        <CommonCell title='网络诊断'/>
                        <CommonCell title='关于美团'/>
                        <CommonCell title='我要应聘'/>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='精品应用'/>

                    </View>
                </ScrollView>
                
            </View>
        );
    }
    renderNavBar()
    {
        return(
            <View style={styles.navBarStyle}>

                    <Text style={styles.fontStyle}>
                        更 多
                    </Text>
                <TouchableOpacity
                    onPress={()=>{
                        alert("点击了设置")
                    }}
                    style={styles.rightViewStyle}
                >

                <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export {XMGMore as default};