import React, { Component } from 'react';
import {

    Text,
    View,
    ScrollView,
    Image,

} from 'react-native';
import styles from '../styles';
import HomeShopCenterCommonCell from './HomeShopCenterCommonCell';
import ShopCenterItem from './ShopCenterItem';
import shopCenterData from '../../LocalData/XMG_Home_D5.json';
class HomeShopCenter extends React.Component
{
    constructor(props)
    {
        super(props);
        let popToHomeView=null;
    }
    renderAllShopItem(){
        let ItemArr=[];
        let ShopCenter_data=shopCenterData.data;
        ShopCenter_data.forEach((data,index)=>{
            let obj=(
                <ShopCenterItem
                    key={index}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popTopShopCenter={(url)=>this.popToHome(url)}
                />
        );
            ItemArr.push(obj);
            }
        );
        return ItemArr;
    }
    popToHome(url){
        this.props.popToHomeView(url);
    }
    render(){
        return(
            <View style={styles.ShopCenter}>
                <HomeShopCenterCommonCell
                    leftTitle='购物中心'
                    leftIconName='gw'
                    rightTitle={shopCenterData.tips}

                />

                <ScrollView
                    style={styles.shopCenterData_Scroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllShopItem()}
                </ScrollView>
            </View>
        );
    }
}


export {HomeShopCenter as default};