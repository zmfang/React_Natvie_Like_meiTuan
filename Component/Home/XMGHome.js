import React, { Component } from 'react';
import {

    Text,
    View,
    TouchableHighlight,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView

} from 'react-native';
import HomeDetail from './XMGHomeDetail';
import styles from '../styles';
import TopView from './TopView';
import HomeMiddleView from './HomeMiddleView';
import HomeMiddleBottonView from './HomeMiddleBottonView';
import HomeShopCenter from './HomeShopCenter';
import ShopCenterDetail from './ShopCenterDetail';
import HotChanel from './HomeHotChanel';
import GuessLike from './HomeGuessLike';
class XMGHome extends React.Component
{

    pushToDetail(url)
    {

        this.props.navigator.push(
            {
                component:HomeDetail,
                title:'详情页',
                passProps:{'url':this.dealWithUrl_HomeDetail(url)}
            },

        )

    }
    dealWithUrl_HomeDetail(url){
        return(
            url.replace('imeituan://www.meituan.com/web?url=','')
        )
    }
    dealWithUrl(url){
        return(
            url.replace('imeituan://www.meituan.com/web/?url=','')
        )
    }
    pushToShopCenterDetail(url)//跳转到购物中心详情页
    {

        this.props.navigator.push(
            {
                component:ShopCenterDetail,
                passProps:{'url':this.dealWithUrl(url)}
            }
        )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
                {/*<TouchableHighlight*/}
                    {/*onPress={()=>{this.pushToDetail()}}*/}
                {/*>*/}
                {/*<Text>*/}
                    {/*首页*/}
                {/*</Text>*/}
                {/*</TouchableHighlight>*/}
                <ScrollView>

                    <TopView/>

                    <HomeMiddleView/>
                    <HomeMiddleBottonView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <HomeShopCenter
                        popToHomeView={(url)=>{this.pushToShopCenterDetail(url)}}
                    />

                    <HotChanel/>

                    <GuessLike/>

                </ScrollView>
            </View>
        );
    }
  renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    // translucent={true}

                    hidden={false}
                    // animated={true}
                />
                <View style={styles.navLeftText}>
                    <TouchableOpacity onPress={()=>{
                        alert('点击了')

                    }}>

                        <Text style={{color:'white'}}>广州</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder='输入商家，品类，商圈'
                    style={styles.topInputStyle}
                    underlineColorAndroid={'transparent'}
                />


                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={()=>{
                        alert('点击了')
                    }}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        alert('点击了')
                    }}>
                        <Image source={{uri:'icon_homepage_scan'}}  style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        ) }
}

export {XMGHome as default};