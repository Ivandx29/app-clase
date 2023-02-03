import React, { useState, useEffect } from 'react'
import * as eva from '@eva-design/eva';
import { View, StyleSheet } from 'react-native';
import { ApplicationProvider, Modal, Card, Layout, Text, Button } from '@ui-kitten/components';
import PersonService from '../service/PersonService'

const Contador = () => {

    const personService = new PersonService();
    const [counter, setCounter] = useState(0);
    const [persona, setPersona] = useState();
    const [isVisible, setIsVisible] = useState(false);

    const incremento = () => {
        setCounter(counter + 1);
    }

    const decremento = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        obtenerPersona();

    }, [])

    const obtenerPersona = () => {
        personService.obtenerPersonas().then((response) => {
            setPersona(response.results[0])
        })
    }



    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Layout >
                <Text>Esto es un Contador</Text>
                <Text>{counter}</Text>
                <Button onPress={incremento}> incremento </Button>
                <Button onPress={decremento}> Decremento </Button>

                <Button onPress={() => { setIsVisible(true); obtenerPersona(); }}> Ver Persona </Button>
                <Modal visible={isVisible}>
                    <Card >
                        <Text>Nombre de Sujeto : {persona.name.first}</Text>
                        <Text>Edad del Sujeto : {persona.dob.age}</Text>
                        <Button onPress={() => setIsVisible(false)}>
                            DISMISS
                        </Button>
                    </Card>
                </Modal>
            </Layout>
        </Layout>
    )
};

export default Contador;