import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native'


import PostComponent from './PostComponent'
export default class HomeScreen extends Component {
  posts = []
  constructor(props) {
    super(props)
    this.state = {
      posts : [
        {
          title: 'Composed image of the moon from last night',
          hash: ["DSOs", "sdd"],
          user: 'RamseyPhotography',
          total_likes: 1000,
          total_comments: 100,
          image: 'http://',
          days: '2w',
        },
        {
          title: 'Post 2',
          hash: ["ddaasd"],
          user: 'martin cuevas',
          total_likes: 1000,
          total_comments: 100,
          image: 'http://',
          days: '2w',
        },
      ]
    }
  }
  static navigationOptions = {
    title: 'Scio Reddit',
  }
  navigateTo = () => {
    const { navigate } = this.props.navigation;
    navigate('Profile', { name: 'Jane' })
  }
  render() {
    
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
      {this.state.posts.map((post, index) => {
        
        return (
          <PostComponent props post={post} key={index} title={post.title}/>
        )
      })}
      </ScrollView>
      </SafeAreaView>
    )
  }
}
