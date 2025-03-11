import React from 'react';
import OlaPerfilFuncao from './OlaPerfilFuncao';
import OlaPerfilClasse from './OlaPerfilClasse';

const App = () => {
  return (
    <div>
      <h1>Olá Mundo Novo</h1>
      <OlaPerfilFuncao
        Nome="Davi Brito"
        Endereco="Rua Jesuino de Arruda, 12"
        Telefone="(16) 12345-6789"
      />
      <OlaPerfilClasse
        Nome="Claudia Arruda"
        Endereco="Rua Vila Pelicano, 89"
        Telefone="(16) 98765-4321"
      />
    </div>
  );
};

export default App;
