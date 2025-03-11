import React, { Component } from 'react';

class OlaPerfilClasse extends Component {
  render() {
    const { Nome, Endereco, Telefone } = this.props;
    return (
      <div>
        <h2>Componente Classe</h2>
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
  }
}

export default OlaPerfilClasse;
