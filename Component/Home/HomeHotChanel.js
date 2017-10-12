import React, { Component } from 'react';
import {

    Text,
    View,
    ScrollView,

} from 'react-native';
import styles from '../styles';
import HotChanel_data from '../../LocalData/XMG_Home_D6.json';
import HotChanelBottom_data from '../../LocalData/HomeHotData.json';
import HomeShopCenterCommonCell from './HomeShopCenterCommonCell';
import HotChanelItem  from './HomeHotChanelItem';
import HotChanelTopItem from './HotChanelTop';
class HomeHotChanel extends React.Component
{
    constructor(props)
    {
        super(props);
        // let popToHomeView=null;
    }
    renderAllHotTopItem(){
        let ItemArr=[];
        let HotChanel_Top_data=HotChanel_data.data[0].resource.cateArea;
        HotChanel_Top_data.forEach((data,index)=>{
                let obj=(
                    <HotChanelTopItem
                        key={index}
                        mainTitle={data.mainTitle}
                        deputyTitle={data.deputyTitle}
                        entranceImgUrl={data.entranceImgUrl}

                    />

                );
                ItemArr.push(obj);
            }
        );
        return ItemArr;
    }
    renderAllHotBottomItem(){
        let ItemArr=[];
        let HotChanel_Bottom_data=HotChanelBottom_data.bottomData;
        HotChanel_Bottom_data.forEach((data,index)=>{
                let obj=(
                    <HotChanelItem
                        key={index}
                        title={data.title}
                        subTitle={data.subTitle}
                        hotImage={data.hotImage}

                    />

                );
                ItemArr.push(obj);
            }
        );
        return ItemArr;

    }
    // popToHome(url){
    //     this.props.popToHomeView(url);
    // }
    render(){
        return(
            <View style={styles.ShopCenter}>
                <HomeShopCenterCommonCell
                    leftTitle='热门频道'
                    leftIconName='rm'
                    rightTitle='查看全部'
                />
                <ScrollView
                    // style={styles.shopCenterData_Scroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllHotTopItem()}
                </ScrollView>
                <View style={{flexDirection:'row',flex:1,}}>
                    {this.renderAllHotBottomItem()}
                </View>

            </View>
        );
    }
}


export {HomeHotChanel as default};