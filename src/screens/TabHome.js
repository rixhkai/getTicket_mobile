import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Content,
  View,
  Card,
  CardItem,
  Button,
  ScrollableTab,
} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import ContentsCard from './Contents';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Tabs locked renderTabBar={() => <ScrollableTab />}>
          <Tab
            textStyle={{color: '#b4b7b8'}}
            activeTextStyle={{color: '#b4b7b8'}}
            heading={
              <TabHeading style={{backgroundColor: '#31393c'}}>
                <Text activeTextStyle={{color: '#b4b7b8'}}>Home</Text>
              </TabHeading>
            }>
            <ContentsCard nav={this.props.navigation.navigate} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#31393c'}}>
                <Text>Sport</Text>
              </TabHeading>
            }></Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#31393c'}}>
                <Text>Music</Text>
              </TabHeading>
            }></Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#31393c'}}>
                <Text>Science</Text>
              </TabHeading>
            }></Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#31393c'}}>
                <Text>Programming</Text>
              </TabHeading>
            }></Tab>
        </Tabs>
      </Container>
    );
  }
}

// class ContentsCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       eve: [],
//     };
//   }

//   handlePress = () => {
//     this.props.nav('Detail');
//   };

//   menu = ({item}) => {
//     <Button onPress={this.handlePress}>
//       <Text>{item.name}</Text>
//     </Button>;
//   };

//   componentDidMount() {
//       const today = new Date().toString().substring(0,10)
//     axios.get(`http://192.168.1.39:5000/dumbtick/events?start_time=${today}`).then(res => {
//       console.log(res);
//       this.setState({eve: res.data});
//     });
//   }

//   render() {
//     const width = Dimensions.get('window').width;
//     return (

//       <Content>
//         <CardItem>
//           <Image
//             style={{
//               borderRadius: 10,
//               width: '100%',
//               height: 150,
//             }}
//             source={{
//               uri: 'https://i.ytimg.com/vi/NNzOH1AbLl0/maxresdefault.jpg',
//             }}
//           />
//         </CardItem>
//         <View style={{margin: 20}}>
//           <Text style={{color: 'grey', fontSize: 20}}>Today</Text>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             width: width,
//             height: 180,
//             paddingLeft: 10,
//             paddingRight: 10,
//           }}>
//           <Card style={{borderRadius: 10, flexDirection: 'row'}}>
//             <View>
//               <TouchableOpacity activeOpacity={0.5} onPress={this.handlePress}>
//                 <Image
//                   style={{
//                     height: 130,
//                     width: 100,
//                     borderTopLeftRadius: 10,
//                     borderBottomLeftRadius: 10,
//                   }}
//                   source={{
//                     uri: 'https://i.ytimg.com/vi/NNzOH1AbLl0/maxresdefault.jpg',
//                   }}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View style={{alignItems: 'flex-start'}}>
//               <Text style={{fontSize: 20, paddingLeft: 8}}>Raisa Concert</Text>
//               <Text style={{fontSize: 12, paddingLeft: 8, color: 'grey'}}>
//                 Thu, 17 June 2019
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   paddingLeft: 8,
//                   paddingTop: 20,
//                   color: 'grey',
//                 }}>
//                 Ini description
//               </Text>
//             </View>
//           </Card>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             width: width,
//             height: 180,
//             paddingLeft: 10,
//             paddingRight: 10,
//           }}>
//           <Card style={{borderRadius: 10, flexDirection: 'row'}}>
//             <View>
//               <Image
//                 style={{
//                   height: 130,
//                   width: 100,
//                   borderTopLeftRadius: 10,
//                   borderBottomLeftRadius: 10,
//                 }}
//                 source={{
//                   uri: 'https://i.ytimg.com/vi/NNzOH1AbLl0/maxresdefault.jpg',
//                 }}
//               />
//             </View>
//             <View style={{alignItems: 'flex-start'}}>
//               <Text style={{fontSize: 20, paddingLeft: 8}}>Raisa Concert</Text>
//               <Text style={{fontSize: 12, paddingLeft: 8, color: 'grey'}}>
//                 Thu, 17 June 2019
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   paddingLeft: 8,
//                   paddingTop: 20,
//                   color: 'grey',
//                 }}>
//                 Ini description
//               </Text>
//             </View>
//           </Card>
//         </View>
//       </Content>
//     );
//   }
// }
