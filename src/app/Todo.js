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
      <View>
        <TextInput
          style={ styles.container }
          value={ this.state.newTodo }
          onChangeText={ this.handleChange.bind(this) }
        />
        <TouchableOpacity onPress={this.handlePress.bind(this) }>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        <View>
          { this.state.todos.map((todo, i) => <Text key={ i }>{ todo }</Text>) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
