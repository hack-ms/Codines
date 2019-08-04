import React from 'react';
import {Text, H3} from 'native-base';
import {View, StyleSheet, TouchableOpacity} from "react-native";

const CardList = ({item}) => {
  return (
    <TouchableOpacity button onPress={() => item.navigate('Comparativo')}>
        <View style={[style.cardContainer,{ backgroundColor: item.color}]}>
          <Text style={{color: 'white', opacity: .7, fontSize: 18, fontWeight: '500'}}>{item.title}</Text>
          <H3 style={{color: 'white', fontWeight: '600'}}>
            R$ {item.value}
          </H3>
          <Text style={{marginTop: 10, fontWeight: '600', opacity: .4}}>Ver Dados</Text>
        </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 8,
    height: 110,
    minWidth: 130,
  },
});

export default CardList;