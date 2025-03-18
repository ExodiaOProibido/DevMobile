// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Define o componente funcional App
const App = () => {
  // Declara um estado chamado 'nome' e sua função de atualização 'setNome'
  const [nome, setNome] = useState('');

  // Declara um estado chamado 'mensagem' e sua função de atualização 'setMensagem'
  const [mensagem, setMensagem] = useState('');

  // Função chamada ao clicar no botão "Enviar"
  const lidarComClique = () => {
    // Verifica se o nome foi preenchido
    if (nome) {
      // Atualiza o estado 'mensagem' com uma saudação personalizada
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    // ScrollView permite rolagem caso o conteúdo seja maior que a tela
    <ScrollView style={styles.container}>
      {/* View para agrupar elementos */}
      <View style={styles.view}>
        {/* Exibe uma imagem carregada da internet */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />

        {/* Exibe um texto abaixo da imagem */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      {/* Campo de entrada de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome} // Atualiza o estado 'nome' ao digitar
          value={nome} // Define o valor do campo como o estado 'nome'
        />
        {/* Botão para enviar o nome */}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>

      {/* Exibe a mensagem somente se houver conteúdo em 'mensagem' */}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* Botão customizado usando TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Define os estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Espaçamento interno
  },
  view: {
    alignItems: 'center', // Centraliza os itens na tela
    marginBottom: 20, // Espaço abaixo da View
  },
  image: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10, // Espaço abaixo da imagem
  },
  text: {
    fontSize: 20, // Tamanho da fonte do texto
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 20, // Espaçamento abaixo do texto
  },
  inputContainer: {
    marginBottom: 20, // Espaçamento abaixo do campo de entrada
  },
  input: {
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Largura da borda
    marginBottom: 10, // Espaçamento abaixo do input
    paddingHorizontal: 10, // Espaçamento interno lateral
  },
  messageContainer: {
    marginBottom: 20, // Espaço abaixo da mensagem
  },
  message: {
    fontSize: 16, // Tamanho do texto da mensagem
  },
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Espaçamento interno do botão
    borderRadius: 5, // Borda arredondada
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 16, // Tamanho da fonte do botão
    fontWeight: 'bold', // Texto em negrito
  },
});

// Exporta o componente para ser utilizado em outros arquivos
export default App;
