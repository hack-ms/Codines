import React from 'react';
import {Image} from "react-native";
import {Container, Text, H3} from 'native-base';

const SelosList = (props) =>  {
  return (
    <Container style={{flexDirection: 'column', width: 110, alignItems: 'center'}}>
      <Text style={{textAlign: 'center', color: '#AEAEAE', fontSize: 13}}>{props.item.title}</Text>
      <Image style={{width: 43, height: 43}} source={require('../../../assets/img/icon/medalha/icon_saude.png')}/>
      <Text style={{textAlign: 'center', color: '#AEAEAE', fontSize: 13}}>{props.item.score} estrelas</Text>
      <H3 style={{textAlign: 'center'}}>{props.item.category}</H3>
  </Container>
  );
};


export default SelosList;