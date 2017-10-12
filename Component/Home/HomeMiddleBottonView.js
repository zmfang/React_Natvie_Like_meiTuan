import React, { Component } from 'react';
import {

    Text,
    View,

} from 'react-native';
import styles from '../styles';
import MiddleCommonItem from './MiddleCommonItem';
import HomeData from '../../LocalData/XMG_Home_D4.json';
import HomeMiddleTopData from '../../LocalData/HomeTopMiddle.json';
import HomeMiddleTopView from './HomeMiddleTopView';
class HomeMiddleBottonView extends React.Component
{
    constructor(props)
    {
        super(props);
        let popTopHome=null;
    }
    renderBottomItem(){//xia半部分子组件

        let itemarr=[];
        let Bottomdata=HomeData.data;
        Bottomdata.forEach((data,index)=>{

            let obj=(
                <MiddleCommonItem
                    key={index}
                    title={data.maintitle}
                    subtitle={data.deputytitle}
                    rightIcon={this.dealWithImgUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                    tplurl={data.tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
            itemarr.push(obj)
            }
        );
        return itemarr;
    }
    popToTopView(data){

        this.props.popTopHome(data);
    }
    dealWithImgUrl(imageurl)
    {
        if(imageurl.search('w.h')===-1){//没有找到
            return imageurl;
        }else
            return imageurl.replace('w.h','120.100');
    }
    renderMiddleTopView(){
        let MiddleTopdata=HomeMiddleTopData.data[0];
        return(
            <HomeMiddleTopView
                title={MiddleTopdata.title}
                subtitle={MiddleTopdata.subTitle}
                rightIcon={MiddleTopdata.image}

            />
        );
    }
    render(){
        return(

            <View>
                <View style={{marginTop:15,flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderMiddleTopView()}
                </View>

                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {this.renderBottomItem()}
                </View>
            </View>

        );
    }
}

export {HomeMiddleBottonView as default};