import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断当前用户系统


} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/XMGHome';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';
import Shop from '../Shop/XMGShop';
import styles from '../styles';

class XMGMain extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'Home'
        };
    }
    render()
    {
        return (
            <TabNavigator>
                {
                    this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home','首页',Home)
                }
                {
                    this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','Shop','商家',Shop)
                }
                {
                    this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','Mine','我的',Mine)
                }
                {
                    this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','More','更多',More,)
                }
            </TabNavigator>
        );
    }
    //每一个Tabbaritem
    renderTabBarItem(title ,iconName, selectedIconName, selectedTab,componentName,component,badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={()=><Image source={{uri:iconName }} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                selected={this.state.selectedTab===selectedTab}
                onPress={()=>
                    this.setState({selectedTab:selectedTab})}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}

            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={() =>{
                        return    Navigator.SceneConfigs.PushFromRight}
                    }

                    renderScene={(route,navigator)=>{
                        let Component=route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                >

                </Navigator>

            </TabNavigator.Item>
        );

    }
}

export {XMGMain as default};