import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import SiginStyle from '../Sigin/styles';
import GeneralStatusBarColor from '../statusbar';

export default class Sigin extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      usuario: '',
      senha: '',
      senha2: '',
      vetNomes: [''],
      vetSobrenomes: [''],
      vetUsuarios: [''],
      vetSenhas: ['']
    }
  }
   
  handlerNome = (typedText) => {
    this.setState({nome: typedText})
  }
  handlerSobrenome = (typedText) => {
    this.setState({sobrenome: typedText});
  }
  handlerUsuario = (typedText) => {
    this.setState({usuario: typedText});
  }
  handlerSenha = (typedText) => {
    this.setState({senha: typedText});
  }
  handlerSenha2 = (typedText) => {
    this.setState({senha2: typedText});
  }
  
  render() {
    return (
      <View style={SiginStyle.container}>
        <View style={SiginStyle.title}>
          <Text style={{fontSize: 50}}>Cadastrar</Text>
        </View>
        <View style={SiginStyle.fieldContainer}>
          <TextInput placeholder={'Nome'} onChangeText={this.handlerNome} style={SiginStyle.field} />
          <TextInput placeholder={'Sobrenome'} onChangeText={this.handlerSobrenome} style={SiginStyle.field} />
          <TextInput placeholder={'Nome de usuário'} onChangeText={this.handlerUsuario} style={SiginStyle.field} />
          <TextInput secureTextEntry={true} placeholder={'Crie uma senha'} onChangeText={this.handlersenha} style={SiginStyle.field} />
          <TextInput secureTextEntry={true} placeholder={'Confirme sua senha'} onChangeText={this.handlersenha2} style={SiginStyle.field} />
        </View>
        <View style={SiginStyle.buttonContainer}>
          <Button color={'black'} title={'Enviar'} onPress={()=>{
            alert('Dados enviados');
            setTimeout(()=>{
              this.props.navigation.goBack();
            }, 1500);
            }
            } />
            <Button color={'black'} title={'Voltar'} onPress={()=>{this.props.navigation.goBack()}} />
        </View>
      </View>
    )
  }
}