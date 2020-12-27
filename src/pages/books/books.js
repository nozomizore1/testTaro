import React, { Component } from 'react'
import { View, Button, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['4', '5', '6'],
      val: ''
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleInput = (e) => {
    console.log(e)
    this.setState({
      val: e.detail.value
    })
  }

  add = () => {
    this.setState({
      todos: [...this.state.todos, this.state.val],
      val: ''
    })
  }

  render() {
    return (
      <View>
        <Text>咋回事啊</Text>
        <Input value={this.state.val} onInput={this.handleInput}></Input>
        <AtButton onClick={this.add}>添加</AtButton>
        {this.state.todos.map((v, i) => {
          return (
            <View key={i + 1}>
              <Text>
                {i + 1} : {v}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Books
