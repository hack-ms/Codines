import React, {Component} from 'react';
import {Image} from 'react-native';
import {CardItem, Card, Container, H3, Text, Body} from "native-base";
import {Grid, Col} from "react-native-easy-grid";

export default class EmpresaParceira extends Component{
  constructor(props){
    super(props);
    this.state = {
      empresas: [
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
        {image: '', title: 'NANA', description: 'fhaskjhsfkahsdkkhfhkjdsfahjkasdfhjkasdfkjh'},
      ]
    };
  }

  // _renderItem({item, index}){
  //   return (
  //     <Card>
  //       <CardItem>
  //         <Container>
  //           <Grid>
  //             <Col style={{width: 111}}>
  //
  //             </Col>
  //             <Col>
  //               <H2>{item.title + index}</H2>
  //               <Text>{item.description}</Text>
  //             </Col>
  //           </Grid>
  //         </Container>
  //       </CardItem>
  //     </Card>
  //   );
  // }

      // <Carousel
      //   ref={(c) => {this._carousel = c;}}
      //   data={this.state.empresas}
      //   renderItem={this._renderItem}
      //   sliderWidth={344}
      //   itemWidth={344}
      // />
 render(){
  return (
    <Container style={{paddingHorizontal: 10, marginTop: 36}}>
      <H3>Empresa Legal</H3>
      <Card style={{height: 125}}>
        <CardItem>
          <Body>
            <Grid>
              <Col style={{width: 111}}>
                <Image
                  style={{width: 111, height: 111}}
                  source={require('../../../assets/img/empresa/logo.png')}
                />
              </Col>
              <Col style={{padding: 5}}>
                <H3>Cassems</H3>
                <Text style={{fontSize: 14, opacity: .6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum.</Text>
              </Col>
            </Grid>
          </Body>
        </CardItem>
      </Card>
    </Container>
    );
  }
}