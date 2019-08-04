import React, { Component, Fragment } from "react"
import { Container, H1, Text, Body, Thumbnail } from "native-base"
import { Image, TouchableOpacity, Alert } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"

export default class Avaliar extends Component {
  constructor(props) {
    super(props)
  }

  registrarDenuncia = () => {
    Alert.alert(
      "Registrar Denúncia",
      "Nos ajude a melhorar nosso sistema de registro. Envie sua RECLAMAÇÃO ou DENÚNCIA que nós teremos o prazer em te ajudar :D",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Enviar Denúncia",
          onPress: () => {
            this.props.navigation.navigate("RegistrarDenuncia")
          }
        }
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Container>
        <Body
          style={{
            flexDirection: "column",
            marginVertical: 20,
            marginHorizontal: 20
          }}
        >
          <H1 style={{ marginBottom: 20 }}>Essa informação foi útil?</H1>

          <Text>
            Nos ajude a fiscalizar nossas obras, sua opnião é muito importante
            para nós. :D
          </Text>
          <Grid>
            <Col style={{ marginLeft: 80, marginTop: 20 }}>
              <TouchableOpacity
                button
                onPress={() => {
                  this.props.navigation.navigate("AvaliacaoEnviada")
                }}
              >
                <Image
                  source={require("../imgs/ic-sim.png")}
                  style={{ height: 50, width: 50 }}
                />
              </TouchableOpacity>
            </Col>
            <Col style={{ marginTop: 20 }}>
              <TouchableOpacity
                button
                onPress={() => {
                  this.registrarDenuncia()
                }}
              >
                <Image
                  source={require("../imgs/ic-nao.png")}
                  style={{ height: 50, width: 50 }}
                />
              </TouchableOpacity>
            </Col>
          </Grid>
        </Body>
      </Container>
    )
  }
}
