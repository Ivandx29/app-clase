import React, { useState, useEffect } from 'react'
import * as eva from '@eva-design/eva';
import { View, StyleSheet, Image } from 'react-native';
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

    const obtenerPersona = () => {
        personService.obtenerPersonas().then((response) => {
            setPersona(response.results[0])
        })
    }


    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 50,
            height: 50,
        },
        logo: {
            width: 100,
            height: 100,
        },
    });

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
                        <Image
                            style={styles.logo}
                            source={{ uri: `${persona?.picture?.medium}` }}
                        />
                        <Text>Nombre de Sujeto : {persona?.name?.first}</Text>
                        <Text>Edad del Sujeto : {persona?.dob?.age}</Text>
                        <Text>Email del Sujeto : {persona?.email}</Text>
                        <Button onPress={() => setIsVisible(false)}>
                            Cerrar
                        </Button>
                    </Card>
                </Modal>
            </Layout>
        </Layout>
    )
};


export default Contador;