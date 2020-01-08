import React, {Component} from 'react';
import {Content, View, Card, CardItem, Text, Button} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import moment from 'moment';

export default class ContentsCard extends Component {
  constructor() {
    super();
    this.state = {
      eve: [],
      tom: [],
      eves: [],
    };
  }

  handlePress = id => () => {
    this.props.nav('Detail', {ids: id});
    console.log(id);
  };

  menu = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.handlePress(item.id)}>
        <CardItem
          style={{
            backgroundColor: 'transparant',
            marginTop: 150,
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: 5,
            borderColor: 'black',
            textAlign: 'center',
          }}>
          <Image
            style={{
              borderRadius: 10,
              width: 150,
              height: 200,
            }}
            source={{
              uri: item.img,
            }}
            resizeMode="stretch"
          />
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              border: 5,
              borderColor: 'black',
              alignSelf: 'center',
              width: 150,
            }}>
            {item.title + '...'}
          </Text>
        </CardItem>
      </TouchableOpacity>
    );
  };

  today = ({item}) => {
    return (
      <View style={{marginRight: 10}}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.handlePress}>
          <Card>
            <Image
              style={{
                width: 190,
                height: 200,
              }}
              source={{
                uri: item.img,
              }}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                paddingLeft: 5,
                paddingTop: 5,
                paddingRight: 5,
                width: 150,
                alignSelf: 'center',
              }}>
              {item.title}
            </Text>
            <Text style={{alignSelf: 'center', color: 'grey'}}>
              {moment(item.start_time).format('ddd, DD MMM YYYY')}
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  tomorrow = ({item}) => {
    console.log(item + 'tommorr');
    return (
      <View style={{marginRight: 10}}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.handlePress}>
          <Card>
            <Image
              style={{
                width: 190,
                height: 200,
              }}
              source={{
                uri: item.img,
              }}
              resizeMode="stretch"
            />
            <Text style={{padding: 5, alignSelf: 'center'}}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    axios.get(`http://192.168.1.2:5000/dumbtick/events`).then(res => {
      console.log(res);
      this.setState({eves: res.data});
    });
    var date = new Date();
    var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
    axios
      .get(`http://192.168.1.2:5000/dumbtick/events?start_time=${dateString}`)
      .then(res => {
        console.log(res);
        this.setState({eve: res.data});
      });
    var nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    console.log(nextDay);
    var dateStrings = new Date(
      nextDay.getTime() - nextDay.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .split('T')[0];
    axios
      .get(`http://192.168.1.2:5000/dumbtick/events?start_time=${dateStrings}`)
      .then(res => {
        console.log(res);
        this.setState({tom: res.data});
      });
  }

  render() {
    // const date = new Date().toString().substring(0, 10);

    const width = Dimensions.get('window').width;
    return (
      <Content>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: '100%',
              height: 200,
            }}
            source={{
              uri:
                'https://www.pentasia.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXhwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9b531a296e23edbb0ae0d85e4160a44a71b44f8e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRGpFd01EQjROVEF3WGdZNkJrVlVPZ3huY21GMmFYUjVTU0lMUTJWdWRHVnlCanNIVkRvSlkzSnZjRWtpRVRFd01EQjROVEF3S3pBck1BWTdCMVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--46c71b34483be69bdb6c526f3ee4da2b74b4cce2/1662_original.jpg',
            }}
          />
        </View>
        <ScrollView horizontal={true} style={{flex: 1}}>
          <FlatList horizontal data={this.state.eves} renderItem={this.menu} />
        </ScrollView>

        <View style={{margin: 20}}>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>
            Today
          </Text>
        </View>

        <View style={{paddingLeft: 10}}>
          <ScrollView horizontal={true} style={{flex: 1}}>
            <FlatList
              horizontal
              data={this.state.eve}
              renderItem={this.today}
            />
          </ScrollView>
        </View>

        <View style={{marginTop: 20, paddingLeft: 15, marginBottom: 10}}>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>
            Upcoming
          </Text>
        </View>

        <View style={{paddingLeft: 10}}>
          <ScrollView horizontal={true} style={{flex: 1}}>
            <FlatList
              horizontal
              data={this.state.tom}
              renderItem={this.tomorrow}
            />
          </ScrollView>
        </View>
      </Content>
    );
  }
}

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: 80,
          }}
          source={{
            uri:
              'https://www.pentasia.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXhwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9b531a296e23edbb0ae0d85e4160a44a71b44f8e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRGpFd01EQjROVEF3WGdZNkJrVlVPZ3huY21GMmFYUjVTU0lMUTJWdWRHVnlCanNIVkRvSlkzSnZjRWtpRVRFd01EQjROVEF3S3pBck1BWTdCMVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--46c71b34483be69bdb6c526f3ee4da2b74b4cce2/1662_original.jpg',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
