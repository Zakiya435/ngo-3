import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { ListItem, Icon } from "react-native-elements";
import db from "../config";

export default class TotalListScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          place:"mumbai",
          name:"random ngo"
        };
      }

      keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => (
    <ListItem
      key={i}
      title={this.state.name}
      subtitle={
        "Place : " +
        this.state.place 
      }
      titleStyle={{ color: "black", fontWeight: "bold" }}
      bottomDivider
    />
  );
  

      render(){
          return(
              <View>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.name}
            renderItem={this.renderItem}
          />
              console.log(this.state.name);
          </View>
          )
      }
      
}