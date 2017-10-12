import React, { Component } from 'react';
import {

    Text,
    View,
    ScrollView,
    ListView,
} from 'react-native';
import styles from '../styles';
import Dimensions from 'Dimensions';
import TopMenu from '../../LocalData/TopMenu.json'
import TopListView from './TopListView'
let {width}=Dimensions.get('window');
class TopView extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state={
           currentPage:0,
       }
   }
    renderScrollItem()
    {
        let itemArr=[];
        let dataArr = TopMenu.data;

        //遍历创建
       for(let i=0;i<dataArr.length;i++)
       {
          let obj=(
               <TopListView
                   key={i}
                   dataArr={dataArr[i]}
               />
           );
           itemArr.push(obj)
       }
       return itemArr;
       }




    renderIndicator(){
        let IndicatorArr=[], color;
        for (let i=0;i<2;i++)
        {
            color=(i===this.state.currentPage)?{color:'orange'}:{color:'gray'};
            IndicatorArr.push(
                <Text key={i} style={[{fontSize:20},color]}>
                    &bull;
                </Text>
            )
        }
        return IndicatorArr;

    }

    render(){
        return(
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>{
                        let Page=Math.round(e.nativeEvent.contentOffset.x/width);
                        this.setState(
                            {
                                currentPage:Page,
                            }
                        )
                    }}
                >
                    {this.renderScrollItem()}
                </ScrollView>

                <View style={styles.IndicatorView}>
                    {this.renderIndicator()}
                </View>
            </View>

        );
    }
}

export {TopView as default};