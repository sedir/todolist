import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: 'Minha lista',
      headerRight: <FontAwesome.Button name="plus-circle" 
                    backgroundColor={"#ffffffff"} color={'#0084ff'}
                    onPress={ navigation.getParam('callCreateTodo') }  />
    }};

  componentWillMount(){
    this.props.navigation.setParams({ callCreateTodo: this.callCreateTodo })
  }

  callCreateTodo = () => {
    // Vamos chamar a tela de criação
    this.props.navigation.push('CreateTodo');
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
