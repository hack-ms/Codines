import React from 'react';
import {Image} from "react-native";
import {CardItem, Card, Body, Button, Text} from "native-base";

const Grafico = () => {
  return (
    <Card>
      <CardItem header>
        <Body>
          <Image
            style={{width: 300, height: 190}}
            source={require('../assets/img/graph/graph.png')}
          />
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Button block success>
            <Text>Detalhes</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

export default Grafico;