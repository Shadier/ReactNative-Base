import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native'


import PostComponent from './PostComponent'
export default class HomeScreen extends React.Component {
  state = {
    posts : [
      {
        title: 'Composed image of the moon from last night',
        hash: "DSOs",
        user: 'RamseyPhotography',
        url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        total_likes: 1000,
        total_comments: 100,
        image: 'http://',
        days: '2w',
        comments: [
          {
            user: 'fabiolo',
            comment: 'comentario al azar',
            likes: 0
          },
          {
            user: 'fabiolo',
            comment: 'comentario al azar',
            likes: 0
          },
          {
            user: 'fabiolo',
            comment: 'comentario al azar',
            likes: 0
          },
        ]
      },
      {
        title: 'Post 2',
        hash: "ddaasd",
        user: 'martin cuevas',
        url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        total_likes: 1000,
        total_comments: 100,
        image: 'http://',
        days: '2w',
        comments: [
          {
            user: 'fabiolo',
            comment: 'comentario al azar',
            likes: 0
          },
        ]
      },
    ]
  }
  
  static navigationOptions = {
    title: 'Scio Reddit',
  }

  
  navigateTo = () => {
    const { navigate } = this.props.navigation;
    navigate('Profile', { name: 'Jane' })
  }

  render() {
    const postsList = this.state.posts.map(post => {
      return (
        <PostComponent postData={post} navigate={this.navigateTo} title="centro"/>
      );
    });
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        {postsList}
      </ScrollView>
      </SafeAreaView>
    )
  }
}
