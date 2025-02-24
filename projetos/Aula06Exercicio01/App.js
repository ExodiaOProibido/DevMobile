// Importa a biblioteca React e a função useState para gerenciar estados
import React, { useState } from 'react';

// Importa uma imagem local para ser usada no componente
import logox from './assets/NativeLogo.png';

// Importa componentes do React Native para construir a interface
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
  StyleSheet,
} from 'react-native';

// Define o componente principal da aplicação
const App = () => {
  // Estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');

  // Estado para controlar a largura da imagem
  const [imageWidth, setImageWidth] = useState(200);

  // Estado para controlar o carregamento (loading)
  const [isLoading, setIsLoading] = useState(false);

  // Estado para armazenar o valor do Slider
  const [sliderValue, setSliderValue] = useState(0);

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

  // Função que simula um carregamento ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador de carregamento após 2 segundos
      alert('Button pressed!'); // Exibe um alerta
    }, 2000);
  };

  // Retorna a estrutura da interface do usuário
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Exibe um texto de boas-vindas */}
        <Text style={styles.text}>Hello React Native!</Text>

        {/* Exibe uma imagem com largura controlada pelo estado imageWidth */}
        <Image
          source={{ uri: './assets/NativeLogo.png' }}
          style={[styles.image, { width: imageWidth }]}
        />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que aciona a função handlePress */}
        <Button title="Press me" onPress={handlePress} />

        {/* TouchableOpacity que aumenta a largura da imagem ao ser pressionado */}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setImageWidth(imageWidth + 50)}
        >
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>

        {/* ActivityIndicator que aparece enquanto isLoading for true */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

        {/* Exibe o valor atual do Slider */}
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text>
      </View>

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
    </ScrollView>
  );
};

// Define os estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Adiciona padding ao redor do conteúdo
  },
  view: {
    marginBottom: 20, // Adiciona margem na parte inferior
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte
    marginBottom: 10, // Adiciona margem na parte inferior
  },
  image: {
    height: 200, // Define a altura da imagem
    resizeMode: 'contain', // Mantém a proporção da imagem
    marginBottom: 10, // Adiciona margem na parte inferior
  },
  textInput: {
    height: 40, // Define a altura do campo de texto
    borderColor: 'gray', // Define a cor da borda
    borderWidth: 1, // Define a largura da borda
    marginBottom: 10, // Adiciona margem na parte inferior
    paddingHorizontal: 10, // Adiciona padding horizontal
  },
  touchableOpacity: {
    backgroundColor: 'lightblue', // Define a cor de fundo
    padding: 10, // Adiciona padding
    borderRadius: 5, // Arredonda as bordas
    marginBottom: 10, // Adiciona margem na parte inferior
  },
  touchableOpacityText: {
    color: 'white', // Define a cor do texto
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho da fonte
    fontWeight: 'bold', // Define o peso da fonte
    marginTop: 20, // Adiciona margem na parte superior
    marginBottom: 10, // Adiciona margem na parte inferior
  },
});

// Exporta o componente App para ser usado como ponto de entrada da aplicação
export default App;
