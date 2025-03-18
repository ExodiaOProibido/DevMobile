import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  Switch,
  StyleSheet,
} from 'react-native';

// Componente principal da aplicação
const App = () => {
  // Definição dos estados para os inputs e controles
  const [text, setText] = useState(''); // Estado para o campo de texto
  const [loading, setLoading] = useState(false); // Estado para indicador de carregamento
  const [switchValue, setSwitchValue] = useState(false); // Estado para o switch

  // Dados para o FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para o SectionList
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função para lidar com o clique no botão
  const handleButtonPress = () => {
    setLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setLoading(false); // Desativa após 2 segundos
      alert('Button Pressed!'); // Exibe um alerta
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Hello React Native!</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />
        <Button title="Press Me" onPress={handleButtonPress} />
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.touchableOpacityText}>Touch Me</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={loading} />
        
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Switch Value: {switchValue ? 'On' : 'Off'}</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

// Definição dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacityText: {
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
