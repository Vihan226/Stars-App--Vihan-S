import React from "react";

import {View, Text,StyleSheet, FlatList, Alert,SafeAreaView} from 'react-native'
import {ListItem} from 'react-native-elements'
import axios from 'axios'
export default class HomeScreen extends React.Component(){
    constructor(props){
        super(props)
        this.state={
            list_data:[], 
            url:'http://127.0.0.1:5000/',

        }
    }
    getStars=()=>{
        const {url}= this.state
        axios.get(url).then((response)=>{

            return this.setState({list_data:response.data.data})
        })
        .catch((args)=>{alert(error.message)})
    }
render(){
    return(
<View>
<Text>Home Screen</Text>
</View>
        
    )

}
}
