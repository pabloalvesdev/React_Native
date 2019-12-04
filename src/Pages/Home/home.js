import React, { Component } from 'react'
import { Text, TouchableOpacity, ScrollView } from 'react-native'
import HomeStyle from './styles'

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={HomeStyle.container}>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 1</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 1 Descrição do Elemento 1 Descrição do Elemento 1 Descrição do Elemento 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 2</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 2 Descrição do Elemento 2 Descrição do Elemento 2 Descrição do Elemento 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 3</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 3 Descrição do Elemento 3 Descrição do Elemento 3 Descrição do Elemento 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 4</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 4 Descrição do Elemento 4 Descrição do Elemento 4 Descrição do Elemento 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 5</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 5 Descrição do Elemento 5 Descrição do Elemento 5 Descrição do Elemento 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.cont}>
          <Text style={HomeStyle.title}>Elemento 6</Text>
          <Text style={HomeStyle.descrip}>Descrição do Elemento 6 Descrição do Elemento 6 Descrição do Elemento 6 Descrição do Elemento 6</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}