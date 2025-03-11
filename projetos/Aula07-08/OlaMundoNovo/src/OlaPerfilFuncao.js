import React from 'react';

const OlaPerfilFuncao = ({ Nome, Endereco, Telefone }) => {
  return (
    <div>
      <h2>Componente Funcional</h2>
      <p>
        <strong>Nome:</strong> {Nome}
      </p>
      <p>
        <strong>Endereço:</strong> {Endereco}
      </p>
      <p>
        <strong>Telefone:</strong> {Telefone}
      </p>
    </div>
  );
};

export default OlaPerfilFuncao;
