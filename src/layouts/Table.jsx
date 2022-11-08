import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function Table() {
  const list = [
    {
      title: "Personaje1",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Personaje2",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Personaje3",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Personaje4",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Personaje5",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Personaje6",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Personaje7",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Personaje8",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
<>

    <Grid.Container gap={2} justify="center">
    <Grid xs>
      
    </Grid>
    <Grid xs={10}>
    <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 10%, $blue900 50%",
          
        }}
        weight="bold"
        
      >
        Personajes y Escenarios
      </Text>
    </Grid>
    <Grid xs>
    
    </Grid>       
     
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://images.freeimages.com/vhq/images/istock/previews/7153/71537595-pixel-art-people-love-you.jpg" }
                objectFit="none"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </>
  );
}
