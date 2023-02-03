import React, { useState } from 'react'
import * as eva from '@eva-design/eva';
import { View, StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

const Contador = () => {

    const [counter, setCounter] = useState(0);

    const incremento = () => {
        setCounter(counter + 1);
    }

    const decremento = () => {
        setCounter(counter - 1);
    }

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Layout >
                <Text>Esto es un Contador</Text>
                <Text>{counter}</Text>
                <Button onPress={incremento}>
                    incremento
                </Button>
                <Button
                    onPress={decremento}
                >
                    decremento
                </Button>
            </Layout>
        </Layout>
    )
};

export default Contador;