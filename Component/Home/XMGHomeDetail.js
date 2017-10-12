import React, { Component } from 'react';
import {

    WebView,
    Image,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import styles from '../styles';

class XMGHomeDetail extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state={
            detailUrl:this.props.url
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
                    活动详情
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
                    style={{marginTop:1}}
                    // scalesPageToFit={this.state.scalesPageToFit}
                />

            </View>
        );
    }
}

export {XMGHomeDetail as default};