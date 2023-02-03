import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { View, StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import Contador from './src/components/Contador';


export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Contador />
  </ApplicationProvider>
);