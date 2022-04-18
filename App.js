import React from "react";

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from'./Screens/Home'
import DetailScreen from './Screens/Detail'

export default class App extends React.Component(){
render(){
    return(
<View>
<Text>App Screen</Text>
</View>
        
    )

}
}
const appStackNavigator= createStackNavigator({

Home:{Screen: HomeScreen, navigationOptions:{headerShown:false}}, 
Detail:{Screen: DetailScreen}


},
{initialRouteName: 'Home'})
  
const AppContainer= createAppContainer(appStackNavigator)
