import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getTheme from './native-base-theme/components'
import { StyleProvider, Container, Content, Header, Left, Button, Icon, Body, Title, Root, Footer, FooterTab, Badge } from 'native-base';
import { Font, AppLoading } from "expo";
import FooterTabsBadgeExample from './Components/FooterTabs';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  async componentWillMount() {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false })
    } catch (error) {
      console.error('error loading fonts', error);
    }
  }

  render() {

    if(this.state.loading){
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }

    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
          </Header>
          <Content>
            <Text>Content goes here!</Text>
          </Content>
          <FooterTabsBadgeExample />
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
