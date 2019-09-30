import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';

export default class PostComponent extends Component {
    
  render() {
    const header = 
    <>
      <Text style={{color: "#616161", fontSize: 12}}>u/{this.props.user} <Image source={require("../assets/images/dot.png")} style={{width: 5, height: 5}}/> {post.days}</Text>
      <Text style={{fontWeight: "bold", fontSize: 16}}>{this.props.title}</Text>
      <Text style={{backgroundColor: "#ea6a68", padding: 5, borderRadius: 3, color: "white", marginBottom: 5, marginTop: 5, alignSelf: 'flex-start'}}>{post.hash[0]}</Text>
       
    </>
    return (

        <Card key={this.props.key} title={header}>    
          <AutoHeightImage source={{uri: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} width={350} />
          <Button
            title="Go to Jane's profile"
            onPress={this.navigateTo}
          />
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 4, marginRight: 5}} name="arrow-down" size={15} color="#616161" />
            </TouchableOpacity>
            <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 15}}>12</Text>
            <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 2, marginLeft: 5}} name="arrow-up" size={15} color="#616161" />
            </TouchableOpacity>
          </View>
        </Card>
    )
  }
}
