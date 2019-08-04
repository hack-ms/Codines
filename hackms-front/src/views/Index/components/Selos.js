import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, H3} from "native-base";
import SelosList from "./SelosList";


class Selos extends Component {
  constructor(props){
    super(props);

    this.state = {
      selos: [
        {title: 'Médico da Galera', score: 4, category: 'Saúde'},
        {title: 'Médico da Galera', score: 4, category: 'Saúde'},
        {title: 'Médico da Galera', score: 4, category: 'Saúde'},
      ]
    };
  }

  render() {
    const {selos} = this.state;

    return (
      <Container style={{paddingHorizontal: 10, marginTop: 34}}>
        <H3>Meus Selos</H3>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 10,
              marginHorizontal: 10,
              justifyContent: 'space-between'
            }}
          >
            {selos.map((item, key) => (
                <SelosList key={key} {...{item}}/>
            ))}
          </View>
      </Container>
    );
  }
}

export default Selos;