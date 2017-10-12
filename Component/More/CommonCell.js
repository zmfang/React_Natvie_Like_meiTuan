import React, { Component } from 'react';
import {

    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,

} from 'react-native';
import styles from '../styles';
class CommonCell extends React.Component
{

   constructor(props)
   {
       super(props);
       this.state= {
           isOn:false
       };
       this.rightTitle();
      this.renderRightView();


   }
    rightTitle()
    {
        if(this.props.rightTitle)
        {
            return (
                <Text style={{color:'gray',marginRight:3}}>
                    {this.props.rightTitle}
                </Text>
            )
        }
    }

     renderRightView()
{
    if(this.props.isSwitch)
        return(
            <Switch value={this.state.isOn===true}
                    style={{marginRight:10}}
                    onValueChange={()=>{
                        this.setState({
                            isOn:!this.state.isOn
                        })
                    }}
            />
        );
    else{
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.rightTitle()}
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:10}}/>
            </View>
        )
    }
}
    render(){
        return(
            <TouchableOpacity
                onPress={()=>
                {
                    alert("点击了"+this.props.title)
                }}
            >
            <View style={styles.cellViewSty}>
             <Text style={{marginLeft:10,fontSize:14}}>
                 {this.props.title}
             </Text>
                {this.renderRightView()}

            </View>
            </TouchableOpacity>
        );
    }
}

export {CommonCell as default};