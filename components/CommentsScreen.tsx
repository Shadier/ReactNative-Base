import React, { Component } from 'react'
import { View, Text, Image, StyleSheet , Button, SafeAreaView, ScrollView,} from 'react-native'
import PostViewComponent from './PostViewComponent';
import CommentsComponent from './CommentComponent';


export default class CommentsScreen extends Component {
  static navigationOptions = {
    title: "Post Description",
  }

  navigateTo = () => {
    const { navigate } = this.props.navigation;
    navigate('Home', {name: 'Jane'})
  }
  render() {
    
    const { navigation } = this.props;
    const post = navigation.getParam('selected')
    const likes = navigation.getParam('likes')
    const commentsList = post.comments.map(comment => {
      return (
        <CommentsComponent commentData={comment}/>
      );
    });
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        <View style={{backgroundColor: "#dcdbe3"}}>
          <PostViewComponent postData={post} likes={likes}/>
          {commentsList}
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}
