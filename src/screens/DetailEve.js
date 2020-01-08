import React, {Component} from 'react';
import {Content, View, Card, CardItem, Text, Button} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import moment from 'moment';

export default class DetailCard extends Component {
  constructor() {
    super();
    this.state = {
      det: [],
    };
  }

  //   handlePress = () => {
  //     this.props.navigation.navigate('TodoApp');
  //   };

  menu = ({item}) => {
    <Button onPress={this.handlePress}>
      <Text>{item}</Text>
    </Button>;
  };

  componentDidMount() {
    const id = this.props.navigation.state.params.ids;
    console.log(id + 'text');
    axios.get(`http://192.168.1.2:5000/dumbtick/event/${id}`).then(res => {
      console.log(res);
      this.setState({det: res.data});
    });
  }

  render() {
    const width = Dimensions.get('window').width;
    return (
      <Content>
        <FlatList data={this.state.cats} renderItem={this.menu} />
        <Image
          style={{
            width: '100%',
            height: 200,
          }}
          source={{
            uri: this.state.det.img,
          }}
        />
        <View
          style={{
            flex: 1,
            width: width,
            height: '100%',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            {/* <Image
              style={{
                height: 130,
                width: 100,
                borderRadius: 8,
              }}
              source={{
                uri: 'https://i.ytimg.com/vi/NNzOH1AbLl0/maxresdefault.jpg',
              }}
            /> */}

            <View style={{alignItems: 'flex-start'}}>
              <Text style={{fontSize: 20, paddingLeft: 8}}>
                {this.state.det.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingLeft: 8,
                  color: 'grey',
                  marginTop: 5,
                }}>
                {moment(this.state.det.start_time).format('ddd, DD MM YYYY')} -{' '}
                {moment(this.state.det.end_time).format('ddd, DD MM YYYY')}
              </Text>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  paddingLeft: 8,
                  paddingTop: 20,
                  color: 'grey',
                }}>
                {this.state.det.description}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Button
                  style={{
                    marginLeft: 20,
                    marginTop: 30,
                    alignSelf: 'center',
                    backgroundColor: 'black',
                  }}>
                  <Text style={{alignSelf: 'center'}}>Buy</Text>
                </Button>
              </View>
            </View>

            {/* <View style={{flexDirection: 'row'}}>
              <Button>Buy</Button>
            </View> */}
          </View>
        </View>
      </Content>
    );
  }
}
