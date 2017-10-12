import {Platform,StyleSheet}from 'react-native';
import Dimensions from 'Dimensions';
let {width, height}=Dimensions.get('window');

let styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#e8e8e8',
        },
        iconStyle:{

            width:Platform.OS==='ios'? 30:25,
            height:Platform.OS==='ios'? 30:25,

        },
        selectedTitleStyle:{
            color:'orange',
        },
        navBarStyle:{
            height:64,
            backgroundColor:'rgba(255,96,0,1.0)',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',


        },
        navLeftText:{
            justifyContent:'center',
            marginRight:5,
        },
        topInputStyle:{//输入框
            width:width*0.67,
            height:35,
            alignItems:'center',
            marginLeft:7,
            backgroundColor:'white',
            borderRadius:17,
            //内左边距
            paddingLeft:10,
            paddingTop:9,
            textAlign:'left',
            textAlignVertical:'center',
            fontSize:10,
        },
        navRightImgStyle:{
            width:Platform.OS==='ios'? 30:24,
            height:Platform.OS==='ios'? 30:24,
            margin:4,
            marginLeft:9,
            //backgroundColor:'white',



        },
        rightViewStyle: //绝对定位
            {
                position:'absolute',
                right:8,
                bottom:11,
            },
        launchImgSty:{
            flex:1,

        },
        fontStyle:
            {
                color:'white',
                fontSize:18,
                fontWeight:'100',
                fontFamily:'Arial',
            },
        cellViewSty:
            {
                height:40,
                backgroundColor:'white',
                borderColor:'#dddddd',
                borderWidth:0.5,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
            },
        leftView:{
            flexDirection:'row',
            alignItems:'center',

        },
        rightView:{

        },
        leftImgSty:{//左边的图片
            width:Platform.OS==='ios'? 30:24,
            height:Platform.OS==='ios'? 30:24,
            marginLeft:8,
            borderRadius:12,
        },
        leftTitleSty:{
            marginLeft:13,
        },
        ScrollViewStyle:
            {
                backgroundColor:'#e8e8e8',

            },
        MineMiddView:{


            width:width,
            backgroundColor:'white',
            flexDirection:'row',

        },
        MineHeaderView:{
            height:180,
            backgroundColor:'#1c8ef7'

        },
        headerView:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:30,
            marginLeft:4,

        },
        headerRight:{
            flexDirection:'row',
            width:width*0.7,
            marginTop:29,
        },
        MineViewLeftImg:{
            height:72,
            width:72,
            borderRadius:36,
            borderWidth:2,
            borderColor:'rgba(0,0,0,0.2)',
        },
        bottomView:{
            flexDirection:'row',
            width:width,
            position:'absolute',
            bottom:0,
        },
        bottomItem:{
            width:(width/3)+1,
            flexDirection:'column',
            justifyContent:'center',
            height:42,
            borderRightWidth:1,
            borderRightColor:'white',
            alignItems:'center',
            backgroundColor:'rgba(255,255,255,0.19)'
        },
        MineTopView:{
            height:44,
            backgroundColor:'rgba(255,96,0,1.0)',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
        },
        MineTopRight:
            {
                width:Platform.OS==='ios'? 30:26,
                height:Platform.OS==='ios'? 30:26,
                margin:8,

            },

        //首页
        TopView:{

            width:width,
            height:120
        },
        IndicatorView:{
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'white'

        },
        contentViewStyle: {
            flexWrap:'wrap',
            flexDirection:'row',
            backgroundColor:'white',
            width:width,
        },
        TopViewItem:{
            justifyContent:'center',
            alignItems:'center',
            width:70,
            height:70,
            marginTop:8,
            marginLeft:(width-70*5)/6,
        },


        MiddleRightView:{
          backgroundColor:'white',
            width:width*0.5-1,
            height:59,
            marginBottom:1,
            marginRight:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        },
        leftMiddleStyle:{
           width:width*0.5,
            height:120,
            backgroundColor:'white',
            marginRight:1,
            alignItems:'center',


        },
        leftImageStyle:{
            height:30,
            width:130,
            resizeMode:'contain',
            marginTop:6,
        },
        MiddleTopView:{
            backgroundColor:'white',
            width:width,
            height:65,
            marginBottom:1,
            marginRight:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        },

        ShopCenter:{
            marginTop:15

        },
        shopCenterData_Scroll:{
            flexDirection:'row',
            backgroundColor:'white',


        },
        shopCenterItem:{
            margin:8,
        },
        shopSale:{//绝对定位
            position:'absolute',
            left:0,
            bottom:30,
            backgroundColor:'orange',
            color:'white',
            fontSize:11,
            padding:3,
           borderTopRightRadius:3,
            borderBottomRightRadius:3,
        },
        shopCenterItemImage:{
            width:120,
            height:100,
            padding:10,
            borderRadius:8,

        },
        shopCenterDetailTopLeftImage:{
            position:'absolute',
            left:10,
            bottom:13
        },
        HotChanelTop:{
            flexDirection:'row',
            borderWidth:3,
            borderColor:'white'

        },
        guessLikeImage:{
            width:120,
            height:90,
        },



    }

);
export {styles as default}