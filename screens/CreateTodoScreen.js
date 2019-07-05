import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';


class CreateTodoScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
        headerTitle: 'Criar nova tarefa'
      }};

    constructor(){
        super();
        this.state = { text: '' }
    }

    onText = newText => {
        this.setState({ text: newText });
    }

    onSave = () => {
        const { add, navigation } = this.props
        add(this.state.text)
        navigation.goBack()
    }

    render() {
        console.log(this.props.todos);

        return (
            <View style={styles.container}>
                <Input 
                  multiline={true} 
                  value={ this.state.text }
                  onChangeText={ this.onText } 
                  placeholder='Digite sua tarefa aqui...' 
                />
                <View style={styles.layout}>
                  <Button title='Salvar' onPress={ this.onSave } />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  layout: {
    margin: 15,
    height: 20,
    width: 100,
    alignSelf: 'center'
  }
});


const mapStateToProps = state => {
    return {
      todos: state.todos.data
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      add: (todo) => {
        dispatch(addTodo(todo))
      }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoScreen)
