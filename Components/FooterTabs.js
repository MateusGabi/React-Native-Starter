import React, { Component } from 'react';
import { 
    Footer, 
    FooterTab, 
    Button, 
    Icon, 
    Text, 
    Badge } from 'native-base'; 

const handler = () => console.log('hey')
    
export default class FooterTabsBadgeExample extends Component { 
    render() { 
        return (
            <Footer>
                <FooterTab>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                        </Button>
                    <Button active badge vertical>
                        <Badge ><Text>51</Text></Badge>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical onPress={handler}>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}