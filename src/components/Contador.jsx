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
        card: {
            margin: 2,
            justifyContent: 'center',
        },
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
          button: {
            margin: 2,
          },
          controlContainer: {
            borderRadius: 4,
            margin: 2,
            padding: 6,
            justifyContent: 'center',
            backgroundColor: '#3366FF',
          },
    });

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h6'>Esto es un Contador</Text>
                <Text category='h5' >{counter}</Text>
                <Layout style={styles.container}>
                <Button style={{margin:2}} status='warning' onPress={incremento}> incremento </Button>
                <Button style={{margin:2}} status='danger' onPress={decremento}> Decremento </Button>
                
                </Layout>
                <Button appearance='ghost' status='primary' onPress={() => { setIsVisible(true); obtenerPersona(); }}> Ver Persona </Button>
                <Modal visible={isVisible}>
                    <Card style={styles.card} status='success'>
                        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                                style={styles.logo}
                                source={{ uri: `${persona?.picture?.medium}` }}/>
                            <Text  style={{marginBottom:2}} category='h6'>Nombre de Sujeto : {persona?.name?.first}</Text>
                            
                            <Text  style={{marginBottom:2}} >Edad del Sujeto : {persona?.dob?.age}</Text>
                            <Text  style={{marginBottom:2}} >Email del Sujeto : {persona?.email}</Text>
                            <Button   style={{marginTop:2}}appearance='outline' status='success' onPress={() => setIsVisible(false)}>
                                Cerrar
                            </Button>
                        </Layout>
                    </Card>
                </Modal>
            
        </Layout>
    )
};


export default Contador;