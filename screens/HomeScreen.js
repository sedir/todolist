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
  FlatList,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { toDone } from '../actions/todo';
import _ from 'lodash';

class HomeScreen extends React.Component {

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

  renderTodoItem = data => {
    const { item } = data

    return <TouchableOpacity onPress={ () => { this.onPressItem(item.index) } }>
        <View style={styles.containerItem}>
          <Text style={styles.textItem}>{item.title}</Text>
        </View>
      </TouchableOpacity>
  }

  onPressItem = index => {
    console.log(index)
    this.props.toDone(index)
  }

  render() {
    console.log(this.props.todos)

    return (
      <View style={styles.container}>
        <FlatList 
          data={ this.props.todos }
          renderItem={ this.renderTodoItem }
          keyExtractor={ (item, index) => `${index}` }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textItem: {
    fontSize: 16,
    padding: 10,
  },
  containerItem: {
    margin: 10,
    backgroundColor: 'red',
  }
});



const mapStateToProps = state => {
  indexed_todos = state.todos.data.map((val, i) => {
    return { ...val, index: i }
  } );

  return {
    todos: _.filter(indexed_todos, todo => !todo.done )
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    toDone: index => {
      dispatch(toDone(index))
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
