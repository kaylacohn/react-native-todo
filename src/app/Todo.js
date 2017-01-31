import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({ newTodo: text});
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.form }>
          <TextInput
            style={ styles.input }
            value={ this.state.newTodo }
            onChangeText={ this.handleChange.bind(this) }
          />
          <TouchableOpacity
            style={ styles.button }
            onPress={this.handlePress.bind(this) }>
            <Text>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <View>
          { this.state.todos.map((todo, i) => <Text key={ i }>{ todo }</Text>) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  form: {
    flexDirection: 'row',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  input: {
    flex: 0.7
  },
  button: {
    flex: 0.3
  }
});
