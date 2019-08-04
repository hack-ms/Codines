import React, {Component} from 'react';
import MainContainer from "../components/MainContainer";
import { List, ListItem, Card, CardItem, Left, Body, Right, H1, Text, View  } from 'native-base';
import {StyleSheet, TouchableOpacity } from 'react-native';


class ListagemMunicipios extends Component {
    render() {
        return (
            <View>
                <List style={styles.tipo}>
                    <ListItem style={styles.tipo} ItemDivider>
                        <Text >
                            Aplicação de Verba
                        </Text>
                    </ListItem>
                </List>
                <List style={styles.listMunicipios}>
                    <ListItem style={styles.municipios}  button onPress={() => {this.props.navigation.navigate('ListagemTipo')}}>
                        <Text>Campo Grande</Text>
                    </ListItem>
                </List>
                <List style={styles.listMunicipios}>
                    <ListItem button onPress={() => {this.props.navigation.navigate('ListagemTipo')}}>
                        <Text>Aquidauana</Text>
                    </ListItem>
                </List>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    tipo: {
        backgroundColor: '#ebe5fc',
        height: 48,
    },
    listMunicipios: {
        backgroundColor: '#f7f7f7',  marginTop: 20

    },
});

export default ListagemMunicipios;