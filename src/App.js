import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text } from "@nextui-org/react";
import Headers from './layouts/Headers';
function App() {

  return (
    
      <NextUIProvider>
        <Headers />
      </NextUIProvider>
   


  );
}

export default App;
