import React, { Component } from "react"
import {
  Container,
  Content,
  Item,
  Icon,
  Input,
  Textarea,
  Button,
  Text
} from "native-base"
import MainContainer from "../../components/MainContainer"

export default class Index extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <MainContainer title="Registrar Denúncia">
        <Container style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Content>
            <Item style={{ marginVertical: 20 }}>
              <Input placeholder="Motivo da denúncia" />
              <Icon active name="eye" />
            </Item>
            <Textarea
              padder
              rowSpan={8}
              bordered
              placeholder="Descriçao"
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10
              }}
            />
            <Button
              iconLeft
              style={{
                marginTop: 50,
                justifyContent: "center",
                backgroundColor: "#979c9a"
              }}
            >
              <Icon name="camera" />
              <Text>Anexar uma Imagem</Text>
            </Button>
            <Button
              iconLeft
              style={{
                marginTop: 50,
                justifyContent: "center",
                backgroundColor: "#a7d046"
              }}
            >
              <Text>Registrar Denúncia</Text>
            </Button>
          </Content>
        </Container>
      </MainContainer>
    )
  }
}
