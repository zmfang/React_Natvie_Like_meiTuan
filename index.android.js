/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  // Text,
  // View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
// import Main from './Component/Main/XMGMain';
import Launch from './Component/Main/XMGLauch'
export default class taobao extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name:'启动页',component:Launch}}
            configureScene={() =>{
                return    Navigator.SceneConfigs.PushFromRight}
            }

            renderScene={(route,navigator)=>{
                let Component=route.component;
                return <Component {...route.passProps} navigator={navigator}/>;
            }}
        >

        </Navigator>
    );

  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('taobao', () => taobao);
