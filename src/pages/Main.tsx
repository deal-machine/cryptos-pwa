import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import api from '../services/api';

class Main extends Component{
    
    state = {
        last: 0,
        high: 0,
        low: 0,      
    };

    componentDidMount(){
        this.loadTricker();
    }

    loadTricker = async () => {
        const response = await api.get('/BTC/ticker');

        const { ticker } = response.data;
        this.setState({ last: ticker.last, high: ticker.high, low: ticker.low });
      
    };

    render(){

        return(
            <View style={styles.container}>         
                <Text style={styles.title}>Last BITCOIN value:</Text>
                <Text style={styles.descriptions}>{`\n  ${(this.state.last)}`}</Text>
                <Text style={styles.title}>Higher unit value of negotiations at last 24 hours:</Text>
                <Text style={styles.descriptions}>{`\n  ${this.state.high}`}</Text>
                <Text style={styles.title}>Lower unit value of negotiations at last 24 hours:</Text>
                <Text style={styles.descriptions}>{`\n  ${this.state.low}`}</Text>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 50
    },
    title:{
        padding:4,
        fontSize: 24,
    },
    descriptions:{
        paddingBottom:30,
        fontSize: 19,
        color: 'tomato'
    }
});

export default Main;