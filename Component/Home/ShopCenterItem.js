import React, { Component } from 'react';
import {

    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../styles';
import shopCenter_Data from '../../LocalData/XMG_Home_D5.json';
class ShopCenterItem extends React.Component
{
    constructor(props)
    {
        super(props);
        let shoopImage='';
        let shopSale='';
        let shopName='';
        let detailurl='';
        let popTopShopCenter=null;

    }
    clickItem(url)
    {
        if(!this.props.detailurl)
        {return ;}
        else {
            this.props.popTopShopCenter(url);
        }

    }
    render(){
        return(
            <TouchableOpacity
                onPress={()=>this.clickItem(this.props.detailurl)}
                style={styles.shopCenterItem}
            >
                <Image source={{uri:this.props.shopImage}} style={styles.shopCenterItemImage}/>
                <Text style={styles.shopSale}>
                    {this.props.shopSale}
                </Text>
                <Text style={{textAlign:'center',marginTop:5}}>
                    {this.props.shopName}
                </Text>
            </TouchableOpacity>
        );
    }
}

export {ShopCenterItem as default};