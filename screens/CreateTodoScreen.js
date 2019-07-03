import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements';

export default class CreateTodoScreen extends Component {

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

    render() {
        return (
            <View>
                <Input multiline={true} value={ this.state.text }
                 onChangeText={ this.onText } placeholder='Digite sua tarefa aqui...' />
                <Button title='Salvar' />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
