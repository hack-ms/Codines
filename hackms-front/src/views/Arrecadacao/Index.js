import React, {Component} from 'react';
import {Container} from "native-base";
import MainContainer from "../../components/MainContainer";
import ListagemMunicipios from "../../components/ListagemMunicipios";
import Grafico from "../../components/Grafico";

class Index extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigation} = this.props;
    return (
      <MainContainer title="Comparativo">
        <Container>
          <Container style={{margin: 10}}>
            <Grafico/>
          </Container>
          <ListagemMunicipios navigation={navigation}/>
        </Container>
      </MainContainer>
    );
  }
}

export default Index;