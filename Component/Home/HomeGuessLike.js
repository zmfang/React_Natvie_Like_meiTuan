import React, { Component } from 'react';
import {

    Text,
    View,
    ListView,
    Image,
    TouchableOpacity

} from 'react-native';
import styles from '../styles';
import HomeShopCenterCommonCell from './HomeShopCenterCommonCell';
import youLikeData from '../../LocalData/HomeGeustYouLike.json'
class HomeGuessLike extends React.Component
{
    constructor(props)
    {
        super(props);
        let api_url='http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';
        this.state=
            {
               dataSources:new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2})

            }
    }

    componentDidMount() {
        //从网络上请求数据
        this.loadDataFromNet();
    }
    loadDataFromNet()
    {
        fetch(this.props.api_url)
            .then((response)=>response.toJSON())//下一步操作
            .then((responseData)=>{
                //更新数据源
                alert(responseData);
                this.setState({
                        dataSources:this.state.dataSources.cloneWithRows(responseData.data)
                    }
                )
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({dataSources: this.state.dataSources.cloneWithRows(youLikeData.data)})

            })
    }

    renderRow(rowData){
        return(
            <TouchableOpacity
                onPress={()=>alert(0)}
            >
                {/*<Image source={{uri:this.dealWithImgUrl1(rowData.imageUrl)}} style={styles.guessLikeImage}/>*/}
                <View>
                    <View>
                        <Text>
                            {rowData.title}
                        </Text>
                        <Text>
                            {rowData.topRightInfo}
                        </Text>
                    </View>
                    <Text>
                        {rowData.subTitle}
                    </Text>
                    <View>
                        <Text>
                            {rowData.subMessage}
                        </Text>
                        <Text>
                            {rowData.bottomRightInfo}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>

        );
    }
    dealWithImgUrl1(imageUrl)
    {
        if(imageUrl.search('w.h')===-1){//没有找到
            return imageUrl;
        }else
            return imageUrl.replace('w.h','120.90');
    }
    render(){
        return(
            <View style={styles.ShopCenter}>
                <HomeShopCenterCommonCell
                    leftTitle='猜你喜欢'
                    leftIconName='cnxh'
                    rightTitle=''
                />
                {/* 列表*/}
                <ListView
                    dataSource={this.state.dataSources}
                    renderRow={this.renderRow }
                />

            </View>
        );
    }
}

export {HomeGuessLike as default};