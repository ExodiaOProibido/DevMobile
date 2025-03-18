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
  Slider,
  Switch,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');

  // Estado para armazenar a fonte da imagem
  const [imageSource, setImageSource] = useState(require('./assets/icon.png')); // Substitua pelo caminho da sua imagem

  // Estado para controlar o carregamento (loading)
  const [isLoading, setIsLoading] = useState(false);

  // Estado para armazenar o valor do Slider
  const [sliderValue, setSliderValue] = useState(0);

  // Estado para armazenar o valor do Switch
  const [switchValue, setSwitchValue] = useState(false);

  // Estado para controlar a visibilidade do Modal
  const [modalVisible, setModalVisible] = useState(false);

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, organizados em seções
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
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador de carregamento após 2 segundos
      setModalVisible(true); // Abre o modal
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ImageBackground para exibir uma imagem de fundo */}
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Componentes Interativos</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Exibe uma imagem */}
        <Image source={imageSource} style={styles.image} />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          onChangeText={setText}
          value={text}
        />

        {/* Botão que aciona a função handleButtonPress */}
        <Button title="Clique aqui" onPress={handleButtonPress} />

        {/* TouchableOpacity que exibe uma mensagem no console ao ser pressionado */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('TouchableOpacity pressionado')}
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* ActivityIndicator que aparece enquanto isLoading for true */}
        <ActivityIndicator animating={isLoading} />

        {/* Slider para selecionar um valor */}
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text>Valor do Slider: {sliderValue}</Text>

        {/* Switch para alternar entre ligado e desligado */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* FlatList para exibir uma lista de itens */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* SectionList para exibir uma lista com seções */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>

      {/* Modal que aparece quando modalVisible for true */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Modal Aberto</Text>
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

// Define os estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
