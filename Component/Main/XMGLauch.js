import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    View

} from 'react-native';
import styles from '../styles'
import Main from  './XMGMain'
class XMGLauch extends React.Component
{

    render(){
        return(

            <Image source={{uri:'launchimage'}} style={styles.launchImgSty}/>



        );
    }

    componentDidMount() {
        //定时：隔两秒切换
        setTimeout(()=>{
            //跳,页面切换
            this.props.navigator.replace(
                {
                    component:Main,
                }
            )
        },1000)
    }
}

export {XMGLauch as default};