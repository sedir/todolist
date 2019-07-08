import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { removeDone } from '../actions/todo';
import _ from 'lodash';

class DoneScreen extends Component {



  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Tarefas realizadas'
    }
  };



  render() {
    return (
      <View>
        <FlatList
          data={this.props.todos}
          renderItem={this.renderTodoItem}
          keyExtractor={(item, index) => `${index}`}
        />
        <Text style={styles.footer} >Pressione o item para apagá-lo</Text>
      </View>
    )
  }


  renderTodoItem = data => {
    const { item } = data

    return (
      <View>
        <TouchableOpacity onPress={() => { this.onPressItem(item.index) }}>
          <View style={styles.containerItem}>
            <Text style={styles.textItem}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  onPressItem = index => {
    console.log(index)
    this.props.erase(index);
  }


}



const styles = StyleSheet.create({
  footer: {
    margin: 5,
    fontSize: 10,
    color: 'gray',
    alignSelf: 'flex-end'
  },
  textItem: {
    fontSize: 16,
    padding: 10,
  },
  containerItem: {
    margin: 10,
    backgroundColor: 'lightgreen',
  }
});


const mapStateToProps = state => {
  indexed_todos = state.todos.data.map((val, i) => {
    return { ...val, index: i }
  });

  return {
    todos: _.filter(indexed_todos, todo => todo.done == true && todo.status == false)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    erase: index => {
      dispatch(removeDone(index))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DoneScreen)