import React, { Component } from "react"
import MainContainer from "../components/MainContainer"
import Avaliar from "../components/Avaliar"
import {
  List,
  ListItem,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  H1,
  H3,
  Text,
  View,
  Container
} from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import Grafico from "../components/Grafico";

class DetalharVerba extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <MainContainer title="Detalhar Verba">
        <Container
          style={{ marginHorizontal: 15, marginVertical: 20 }}
        >
          <H1>Assistência Farmacêutica</H1>
          <H3 style={{ color: "#666666", marginVertical: 20 }}>
            Apoio financeiro para distribuição e aquisição de medicamentos
          </H3>

          <Text style={{ fontWeight: "500", fontSize: 16, marginVertical: 10 }}>
            Valor Total: 1.325.290,00
          </Text>

          <Text style={{ fontWeight: "500", fontSize: 16, marginVertical: 10 }}>
            Valor Desconto: 1.325.290,00
          </Text>

          <Text style={{ fontWeight: "500", fontSize: 16, marginVertical: 10 }}>
            Valor Liquidado: 1.300.000,00
          </Text>
          <Grafico/>
        </Container>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#000" }} />
        <Avaliar navigation={this.props.navigation} />
      </MainContainer>
    )
  }
}

export default DetalharVerba
