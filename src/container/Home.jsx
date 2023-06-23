import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
export default class Home extends Component {

  homeCardSolicitacao = {
    title: 'Solicitações',
    text: 'Solicite Ajuda',
    action: () => alert('Solicitacao Clicked')
  };

  homeCardStatus = {
    title: 'Acompanhamento',
    text: 'Status de Solicitações',
    action: () => alert('Acompanhamento Clicked')
  };

  homeCardFinalizadas = {
    title: 'Finalizadas',
    text: 'Solicitações Finalizadas',
    action: () => alert('Finalizadas Clicked')
  };

  render() {
    return (
      <div className="containerCards">
        <HomeCard title={this.homeCardSolicitacao.title}
          text={this.homeCardSolicitacao.text}
          action={this.homeCardSolicitacao.action}/>

          <HomeCard {...this.homeCardStatus}/>
          <HomeCard {...this.homeCardFinalizadas}/>
      </div>
    

    );
  }
}