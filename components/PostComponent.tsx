import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card } from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';

export default class PostComponent extends React.Component {
     mono ="dd"
  state={
    likes : 0
  }
  upLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  downLikes = () => {
    let newLikes = this.state.likes - 1
    if(newLikes < 0) newLikes = 0
    this.setState({
      likes: newLikes
    })
  }
  render() { 
    const header =<>
      <Text style={{color: "#616161", fontSize: 12}}>u/{this.props.postData.user} <Image source={require("../assets/images/dot.png")} style={{width: 5, height: 5}}/> {this.props.postData.days}</Text>
      <Text style={{fontWeight: "bold", fontSize: 16}}>{this.props.postData.title}</Text>
      <Text style={{backgroundColor: "#ea6a68", padding: 5, borderRadius: 3, color: "white", marginBottom: 5, marginTop: 5, alignSelf: 'flex-start'}}>{this.props.postData.hash}</Text>
       
    </>
    return (
      <TouchableWithoutFeedback onPress={this.props.navigate}>
        <Card  key={this.mono} title={header}>    
          <Image source={{uri: this.props.postData.url}} style={{width: "100%", height: 200}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <TouchableOpacity onPress={this.downLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="arrow-down" size={15} color="#616161" />
            </TouchableOpacity>
            <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 15}}>{this.state.likes}</Text>
            <TouchableOpacity onPress={this.upLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 10}} name="arrow-up" size={15} color="#616161" />
            </TouchableOpacity>
          </View>
          
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="comment-alt" size={15} color="#616161" />
            <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 15}}>{this.props.postData.comments.length}</Text>
          </View>

          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="share" size={15} color="#616161" />
            <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 15}}>Share</Text>
          </View>

          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="award" size={15} color="#616161" />
            <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 15}}>Award</Text>
          </View>
          
          </View>
        </Card>
      </TouchableWithoutFeedback>
    )
  }
}