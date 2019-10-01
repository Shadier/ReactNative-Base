import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CommentsComponent extends React.Component {
  state = {
    likes: 0,
  };
  upLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  downLikes = () => {
    let newLikes = this.state.likes - 1;
    if (newLikes < 0) newLikes = 0;
    this.setState({
      likes: newLikes,
    });
  }

  render() {
    return (
      <View style={{padding: 20, marginBottom: 10, backgroundColor: "white"}}>
        <Text style={{color: "#aaa", fontSize: 12, fontWeight: 'bold'}}>{this.props.commentData.user} <Image source={require("../assets/images/dot.png")} style={{width: 5, height: 5}}/> {this.props.commentData.days}</Text>
        <Text style={{fontSize: 16, marginTop: 3, textAlign: "left"}}>{this.props.commentData.comment}</Text>
        <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row-reverse',}}>
            <TouchableOpacity onPress={this.upLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 10}} name="arrow-up" size={15} color="#616161" />
            </TouchableOpacity>
            <Text style={{marginTop: 10, color: "#616161", alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold'}}>{this.state.likes}</Text>
            <TouchableOpacity onPress={this.downLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="arrow-down" size={15} color="#616161" />
            </TouchableOpacity>

            <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', marginRight: 20}}>
                <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="reply" size={15} color="#616161" />
                <Text style={{marginTop: 10, color: "#616161", fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 15}}>Reply</Text>
            </View>
            <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', marginRight: 10}}>
                <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="award" size={15} color="#616161" />
            </View>
        </View>
        
      </View>
    );
  }
}
