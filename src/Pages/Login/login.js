import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import LoginStyle from './styles'
import GeneralStatusBarColor from '../statusbar';

export default class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      password: '',
      user: '',
      erros: 0
    }
  }
  handlerUser = (typedText) => {
    this.setState({user: typedText})
  }
  handlerPassword = (typedText) => {
    this.setState({password: typedText})
  }
  render() {
    return (
      <View style={LoginStyle.container}>
        <GeneralStatusBarColor backgroundColor={'white'} barStyle='dark-content'/>
        <View style={LoginStyle.title}>
          <Text style={{fontSize: 50}}>Entrar</Text>
        </View>
        <View style={LoginStyle.fieldContainer}>
          <TextInput placeholder={'Usuário'} onChangeText={this.handlerUser} style={LoginStyle.field} />
          <TextInput secureTextEntry={true} onChangeText={this.handlerPassword} placeholder={'Senha'} style={LoginStyle.field} />
        </View>
    <Text style={{alignSelf: 'flex-start', marginLeft: '23%', color: 'red'}}>Erros: {this.state.erros !== 0 ? this.state.erros: null}</Text>
        <View style={LoginStyle.buttonContainer}>
          <Button color={'black'} title={'Entrar'} onPress={()=>{
            if (this.state.user == 'jukera' && this.state.password == '@isgh') {
              this.props.navigation.navigate('Details')
            } else {
              Alert.alert('Ops', 'Usuário ou senha incorretos !', [{text: 'Cadastrar ?', onPress: ()=>this.props.navigation.navigate('Sigin')}, {text: 'Tentar Novamente'}])
              this.setState({erros: this.state.erros+1})
            }
            }} />
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Sigin')}}><Text>Não possui cadastro ?</Text></TouchableOpacity>
        </View>
        <Text>Saltzman &reg;</Text>
      </View>
    )
  }
}