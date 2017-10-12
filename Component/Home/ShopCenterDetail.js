import React, { Component } from 'react';
import {

    Text,
    View,
    TouchableOpacity,
    Image,
    WebView

} from 'react-native';
import styles from '../styles';
class ShopCenterDetail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            detailUrl:this.props.url+'?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    }


    renderNavBar()
    {
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity
                    onPress={()=>this.props.navigator.pop()}
                    style={styles.shopCenterDetailTopLeftImage}
                >
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
                <Text style={styles.fontStyle}>
                    购物中心详情
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
    render(){
        return(
            <View style={{flex:1}}>
                {this.renderNavBar()}
                {/*/!*<WebView*!/*/}
                    {/*// ref={WEBVIEW_REF}*/}
                    {/*// automaticallyAdjustContentInsets={false}*/}
                    {/*// style={styles.webView}*/}
                    {/*// source={{uri: this.state.url}}*/}
                    {/*// javaScriptEnabled={true}*/}
                    {/*// domStorageEnabled={true}*/}
                    {/*// decelerationRate="normal"*/}
                    {/*// onNavigationStateChange={this.onNavigationStateChange}*/}
                    {/*// onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}*/}
                    {/*// startInLoadingState={true}*/}
                    {/*// scalesPageToFit={this.state.scalesPageToFit}*/}
                <WebView
                    //ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={true}
                    // style={styles.webView}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    // onNavigationStateChange={this.onNavigationStateChange}
                    // onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    // scalesPageToFit={this.state.scalesPageToFit}
                />

            </View>
        );
    }
}

export {ShopCenterDetail as default};