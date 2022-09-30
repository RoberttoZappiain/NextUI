import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text } from "@nextui-org/react";
import Headers from './layouts/Headers';
import Map from './map';

function App() {

  return (
    
      <NextUIProvider>
        <Headers />
        <Map/>
      </NextUIProvider>
   


  );
}

export default App;
