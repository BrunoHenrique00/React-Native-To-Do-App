import React, {Component, useState, useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, Button, ScrollView } from 'react-native';


export default function App() {

  const EMOJIS = ['🥰','😗','😙','😚','🙂','🤗','🤩']

  const [toDo,setToDo] = useState(['Fazer compras', 'Estudar para prova dessa semana'])
  const [userInput,setInput] = useState('')
  const [emoji,setEmoji] = useState('')

  {/* Escolhe um emoji aleatório */}
  const randomEmojis = () =>  Math.floor(Math.random() * 6);

  {/* Pega o valor do Input */}
  function getTodo(text){
    setInput(text) 
  }

  {/* Adiciona um ToDo */}
  function addToDo(){
    setToDo([...toDo, userInput])
    setInput('')
  }

  {/* Deleta um ToDo */}
  function deleteToDo(indexTODO){
    toDo.splice(indexTODO,1)
    setToDo([...toDo])
  }

  function renderToDo(){
    return (
      <React.Fragment>
        {toDo.map((todo,index) => 
              <View key={index} style={{minWidth: 140}}>
                    <Text style={styles.todo}>{todo}</Text>
                <View style={styles.button}>
                    <Button title={
                            'Concluido ' + EMOJIS[randomEmojis()]} 
                            style={{ backgroundColor: 'white'}}
                            color='black'
                            onPress={() => {
                              deleteToDo(index)
                            }}
                            />
                </View>
              </View>)}
      </React.Fragment>
    )
  }


  return(
    <View style={styles.container}>
          <Text style={styles.title}>To Do App</Text>

          <TextInput style ={styles.input} onChangeText={(text) => getTodo(text)} value={userInput}  onSubmitEditing={addToDo} multiline placeholder='O que tem para fazer?'/>
        
      <View style={styles.button}>

        <Button color='#7d848e' title= 'Adicionar' onPress={addToDo}/>

      </View>
      <ScrollView style={{minWidth: 200}}>
          <View>
            {renderToDo()}
          </View>
        </ScrollView>
    </View>
  )
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#0e131f',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    paddingLeft: 5,
    borderColor: 'gray',

    marginTop: 100,
    padding: 10,
    borderRadius: 10
  },
  input: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#ECF0F1',
    borderRadius: 10,
    width: 320,
  },
  button: {
    marginTop: 20,
    padding: 5,
    maxWidth: 350,
    alignItems: 'center'
  },
  todo: {
    marginTop: 20,
    backgroundColor: '#ECF0F1',
    borderRadius: 10,
    textAlign: 'center',
    alignContent:'center',
    alignItems:'center',
    padding: 10,
    maxWidth: 360,
    
  }
})