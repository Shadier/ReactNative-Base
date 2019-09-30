import React, { Component } from 'react'
import { View, Text, Image, StyleSheet , Button} from 'react-native'


export default class ProfileScreen extends Component {
  navigateTo = () => {
    const { navigate } = this.props.navigation;
    navigate('Home', {name: 'Jane'})
  }
  render() {
    return (
        <Button
        title="Go to hom"
        onPress={this.navigateTo}
      />
    )
  }
}
