import React, { Component } from 'react';
import {

    Text,
    View,
    Image,
    ListView,
    TouchableOpacity

} from 'react-native';
import styles from '../styles';

class TopListView extends React.Component
{
    constructor(props)
    {
        super(props);
       let dataArr=[];

        let dataSource=new ListView.DataSource({
            rowHasChanged:(row1,row2)=>row1!==row2
        });
        this.state={
            dataSources:dataSource.cloneWithRows(this.props.dataArr)
        }
    }
    renderItem(rowData)
    {
        return(
            <TouchableOpacity
                onPress={()=>alert(rowData.title)}
                style={styles.TopViewItem}
            >

                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}/>
                    <Text style={{fontSize:10}} >
                        {rowData.title}
                    </Text>

            </TouchableOpacity>
        );
    }
    render(){
        return(
           <ListView
               dataSource={this.state.dataSources}
               renderRow={this.renderItem}
               contentContainerStyle={styles.contentViewStyle}
               scrollEnabled={false}
               enableEmptySections = {true}

           />


        );
    }
}

export {TopListView as default};