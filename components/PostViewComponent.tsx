import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class PostViewComponent extends React.Component {
  state = {
    likes: this.props.likes,
  };
  upLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  downLikes = () => {
    let newLikes = this.state.likes - 1;
    if (newLikes < 0) newLikes = 0;
    this.setState({
      likes: newLikes,
    });
  };
  render() {
    return (
      <View style={{padding: 20, backgroundColor: "white", marginBottom: 2}}>
        <View
          style={{
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 5,
          }}>
          <Image
            source={{uri: this.props.postData.usrImage}}
            style={{width: 40, height: 40, borderRadius: 100, marginRight: 10}}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {this.props.postData.category}
            </Text>
            <Text style={{color: '#616161', fontSize: 12}}>
              Posted by u/{this.props.postData.user}{' '}
              <Image
                source={require('../assets/images/dot.png')}
                style={{width: 5, height: 5}}
              />{' '}
              {this.props.postData.days}
            </Text>
          </View>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {this.props.postData.title}
        </Text>
        <Text
          style={{
            backgroundColor: '#ea6a68',
            padding: 5,
            borderRadius: 3,
            color: 'white',
            marginBottom: 5,
            marginTop: 5,
            alignSelf: 'flex-start',
          }}>
          {this.props.postData.hash}
        </Text>

        <Image
          source={{uri: this.props.postData.url}}
          style={{width: '100%', height: 200}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={{
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={this.downLikes}
              style={{marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon
                style={{
                  alignSelf: 'flex-start',
                  paddingTop: 4,
                  paddingRight: 10,
                }}
                name="arrow-down"
                size={15}
                color="#616161"
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                color: '#616161',
                alignSelf: 'flex-start',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {this.state.likes}
            </Text>
            <TouchableOpacity
              onPress={this.upLikes}
              style={{marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon
                style={{
                  alignSelf: 'flex-start',
                  paddingTop: 2,
                  paddingLeft: 10,
                }}
                name="arrow-up"
                size={15}
                color="#616161"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <Icon
              style={{
                marginTop: 10,
                alignSelf: 'flex-start',
                paddingTop: 4,
                paddingRight: 10,
              }}
              name="comment-alt"
              size={15}
              color="#616161"
            />
            <Text
              style={{
                marginTop: 10,
                color: '#616161',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                fontSize: 15,
              }}>
              {this.props.postData.comments.length}
            </Text>
          </View>

          <View
            style={{
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <Icon
              style={{
                marginTop: 10,
                alignSelf: 'flex-start',
                paddingTop: 4,
                paddingRight: 10,
              }}
              name="share"
              size={15}
              color="#616161"
            />
            <Text
              style={{
                marginTop: 10,
                color: '#616161',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                fontSize: 15,
              }}>
              Share
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
