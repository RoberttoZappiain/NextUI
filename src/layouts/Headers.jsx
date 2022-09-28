import React from 'react'
import { Container, Card, Row, Text } from "@nextui-org/react";

export default function Headers() {
  return (
    <Container fluid>
    <Card css={{ $$cardColor: '$colors$blue800', mt: 10 }}>
      <Card.Body >
        <Row justify="center" align="center">
          <Text h6 size={15} color="white" css={{ m: 50 }}>
            NextUI gives you the best developer experience with all the features
            you need for building beautiful and modern websites and
            applications.
          </Text>
        </Row>
      </Card.Body>
    </Card>
  </Container>
  )
}
