// Importa o React e o hook useState do React
import React, { useState } from 'react';

// Importa componentes do React Native para construção da interface
import {
  View, // Container para organizar elementos na tela
  Text, // Exibe textos
  Image, // Exibe imagens
  TextInput, // Campo de entrada de texto
  Button, // Botão básico
  TouchableOpacity, // Botão personalizável que responde ao toque
  ScrollView, // Permite rolagem da tela
  FlatList, // Lista otimizada para exibir grandes quantidades de itens
  SectionList, // Lista otimizada que agrupa itens em seções
  ActivityIndicator, // Indicador de carregamento
  StyleSheet, // Permite definir estilos para os componentes
} from 'react-native';

// Define o componente principal do aplicativo
const App = () => {
  // Define um estado 'text' para armazenar o valor do TextInput
  const [text, setText] = useState('');

  // Define um estado 'isLoading' para controlar o indicador de carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Função executada ao pressionar um botão
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador após 2 segundos
      alert('Botão pressionado!'); // Exibe um alerta
    }, 2000);
  };

  // Dados para a FlatList, representando uma lista simples
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, representando uma lista dividida em seções
  const sections = [
    {
      title: 'Seção 1', // Título da seção
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2', // Outra seção
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  return (
    // ScrollView permite rolar a tela caso os elementos excedam o espaço disponível
    <ScrollView style={styles.container}>
      {/* View agrupa elementos */}
      <View style={styles.view}>
        {/* Texto simples */}
        <Text style={styles.text}>Olá, mundo!</Text>

        {/* Imagem carregada da web */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo" // Texto de dica
          value={text} // Liga o estado ao valor do input
          onChangeText={setText} // Atualiza o estado ao digitar
        />

        {/* Botão com a função handlePress ao ser pressionado */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* Botão personalizável (TouchableOpacity) */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento visível apenas quando 'isLoading' for true */}
        <ActivityIndicator animating={isLoading} />
      </View>

      {/* Lista de itens usando FlatList */}
      <FlatList
        data={data} // Define os dados da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item como um texto
        keyExtractor={(item) => item.id.toString()} // Converte id para string e usa como chave
      />

      {/* Lista de seções usando SectionList */}
      <SectionList
        sections={sections} // Define os dados da lista com seções
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da seção como um texto
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título da seção
        )}
        keyExtractor={(item) => item.id.toString()} // Converte id para string e usa como chave
      />
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o ScrollView ocupar toda a tela
    padding: 20, // Adiciona espaçamento interno
  },
  view: {
    marginBottom: 20, // Adiciona espaçamento abaixo da View
  },
  text: {
    fontSize: 20, // Define o tamanho do texto
    marginBottom: 10, // Adiciona espaçamento abaixo do texto
  },
  image: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    marginBottom: 10, // Adiciona espaçamento abaixo da imagem
  },
  textInput: {
    height: 40, // Define a altura do input
    borderColor: 'gray', // Define a cor da borda
    borderWidth: 1, // Define a largura da borda
    marginBottom: 10, // Adiciona espaçamento abaixo do input
    paddingHorizontal: 10, // Adiciona espaçamento interno horizontal
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Define a cor de fundo do botão
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredonda as bordas
    marginBottom: 10, // Adiciona espaçamento abaixo do botão
  },
  touchableOpacityText: {
    color: 'white', // Define a cor do texto do botão
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho do texto do cabeçalho da seção
    fontWeight: 'bold', // Define o peso da fonte
    marginTop: 20, // Adiciona espaçamento acima do cabeçalho
    marginBottom: 10, // Adiciona espaçamento abaixo do cabeçalho
  },
});

// Exporta o componente App para ser usado no aplicativo
export default App;
