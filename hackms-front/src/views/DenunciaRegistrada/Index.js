import React, { Component } from "react"
import { Image } from "react-native"
import {
  Container,
  Content,
  H3,
  H1,
  View,
  Text,
  Button,
  Icon
} from "native-base"
import MainContainer from "../../components/MainContainer"

export default class Index extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <MainContainer title="Denúncia Enviada">
        <Container style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Content>
            <View style={{ alignItems: "center", flex: 1 }}>
              <H1 style={{ marginVertical: 20 }}> Parabéns! </H1>
              <H3 style={{ marginTop: 20 }}>Sua ajuda é sempre bem vinda ;)</H3>
              <Text
                style={{ marginTop: 10, marginBottom: 50, color: "#b9b9b9" }}
              >
                Total de estrelas arrecadadas: 3
              </Text>
              <Image
                source={require("../../imgs/sucesso-denuncia.png")}
                style={{ width: 250, height: 250 }}
              />
              <Button
                iconLeft
                style={{
                  marginTop: 50,
                  justifyContent: "center",
                  backgroundColor: "#a7d046"
                }}
              >
                <Icon name="home" />
                <Text>Voltar ao Início</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </MainContainer>
    )
  }
}
