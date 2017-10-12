import React, { Component } from 'react';
import {

    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import CommonMycell from './XMGCommonMycell';
import styles from '../styles';
import MineMiddlView from './MineMiddlView';
import MineHeaderView from './XMGMineHeaderView';
class XMGMine extends React.Component
{
    renderNavBar()
    {
        return(
            <View style={styles.MineTopView}>
                <TouchableOpacity
                    onPress={()=>{
                        alert("点击了我的消息")
                    }}
                    style={{marginLeft:3}}
                >
                    <Image source={{uri:'icon_message_highlighted_android'}} style={styles.MineTopRight} />
                </TouchableOpacity>

                <TouchableOpacity
                     onPress={()=>{
                    alert("点击了设置")

                     }}
                     style={{marginRight:3}}
                >
                    <Image source={{uri:'icon_mine_setting'}} style={styles.MineTopRight}/>
                </TouchableOpacity>
            </View>
        )
    }


    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
            <ScrollView style={styles.ScrollViewStyle}>

                <MineHeaderView/>

                <View>
                    <CommonMycell
                        leftIconName='collect'
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'
                        // rightIconName='me_new'
                    />

                </View>
                <MineMiddlView/>


                <View style={{marginTop:20}}>
                    <CommonMycell
                    leftIconName='draft'
                    leftTitle='钱包'
                    rightTitle='账户余额:$134848291664384981873.96'
                    // rightIconName='me_new'

                />
                <CommonMycell
                    leftIconName='like'
                    leftTitle='抵用券'
                    rightTitle='10张'
                    // rightIconName='me_new'

                />
                <View style={{marginTop:20}}>
                    <CommonMycell
                        leftIconName='card'
                        leftTitle='积分商城'
                        // rightTitle='账户余额:￥100'
                        // rightIconName='me_new'

                    />
                </View>
                <View style={{marginTop:20}}>
                    <CommonMycell
                        leftIconName='new_friend'
                        leftTitle='今日推荐'
                        rightTitle=''
                        rightIconName='me_new'
                        // rightIconName='me_new'

                    />
                </View>
                <View style={{marginTop:20}}>
                    <CommonMycell
                        leftIconName='pay'
                        leftTitle='我要合作'
                        rightTitle='轻松开店，招财进宝'
                         // rightIconName='me_new'
                         // rightIconName='me_new'
                    />
                </View>
                
            </View>
            </ScrollView>
            </View>
        );
    }
}

export {XMGMine as default};