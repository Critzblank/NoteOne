/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import Index from "./src/components/index";
import Note from "./src/components/index";


class App extends Component {
    


    render() {
    
    const MainNavigator = StackNavigator({
        Notes: {screen: Index},
        Note: {screen: Note}
    });
        
    return (
            <View style={styles.container}>
                
                <MainNavigator style={{ width: Dimensions.get('window').width }}/>
 
            </View>
        );
    }
}

const styles = StyleSheet.create({
                container: {
                     flex: 1,
                     backgroundColor: '#fff'
                            }       
                            });

export default App;