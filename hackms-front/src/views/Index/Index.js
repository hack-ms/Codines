import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Grid, Row} from "react-native-easy-grid";
import {Container, H3} from "native-base";
import MainContainer from "../../components/MainContainer";
import CategoriasList from "./components/CategoriasList";
import EmpresaParceira from "./components/EmpresaParceira";
import Selos from "./components/Selos";

class Index extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <MainContainer>
        <Container style={style.container}>
          <H3 style={{marginVertical: 16, marginLeft: 16}}>Categoria de Serviço</H3>
          <Grid>
            <Row size={2}>
              <CategoriasList navigation={this.props.navigation}/>
            </Row>
            <Row size={3}>
              <EmpresaParceira/>
            </Row>
            <Row size={5}>
              <Selos/>
            </Row>
          </Grid>
        </Container>
      </MainContainer>
    );
  }
}

export default Index;

const style = StyleSheet.create({
  container: {  }
});
