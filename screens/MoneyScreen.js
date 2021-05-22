import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

export default class MoneyScreen extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454'}}>
        <View style={{paddingTop:30}}> 
      <TouchableOpacity
      style={{backgroundColor:'#14519b',width:100,height:50,borderColor:'black',borderWidth:4,borderRadius:10}}
      onPress={()=>{this.props.navigation.navigate('ListScreen')}}
      >
        <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center'}}>Back</Text>
      </TouchableOpacity>
    </View>
      </View>
    )
  }
}