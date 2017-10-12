import React, { Component } from 'react';
import {
   ScrollView,
    Image,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import styles from '../styles';
class XMGCommonMycell extends React.Component
{

    rightSubView()
    {
        return(
            <View  style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:10}}/>
            </View>
        )
    }
    renderRightContent(){
        if(!this.props.rightIconName)
        {
            return (
                <Text style={{marginRight:9,color:'#abb4a5',fontSize:11}}>
                    {this.props.rightTitle}
                </Text>
            );
        }else {
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13,marginRight:9}}/>
            )
        }
    }


    render(){
        return(
            <TouchableOpacity
                onPress={()=>{
                    alert('点击了'+this.props.leftTitle)
                }}
            >
                <View style={styles.cellViewSty}>
                    <View style={styles.leftView}>
                        <Image source={{uri:this.props.leftIconName}}
                               style={styles.leftImgSty}
                        />
                        <Text style={styles.leftTitleSty}>
                            {
                                this.props.leftTitle
                            }
                        </Text>
                    </View>
                    <View style={styles.rightView}>
                        {this.rightSubView()}
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

export {XMGCommonMycell as default};