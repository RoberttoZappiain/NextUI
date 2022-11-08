import { Collapse, Text, Grid, Table } from "@nextui-org/react";
import DetailsReq from "./DetailsReq";

export default function Collapsed() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs>

      </Grid>
      <Grid xs={10}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $pink900 10%, $red900 50%",

          }}
          weight="bold"

        >
          Preguntas Frecuentes
        </Text>
      </Grid>
      <Grid xs>

      </Grid>
      <Grid>
        <Collapse.Group splitted>
          <Collapse title="Requisitos minimos y Recomendados">
            <Grid.Container gap={2} justify="center" >
             
              <Grid xs={12} md={6}>
                <DetailsReq />
              </Grid>

             
              <Grid xs={12} md={6}>
                <Text>
                <DetailsReq />
                </Text>
              </Grid>
            </Grid.Container>
          </Collapse>
          <Collapse title="Ayuda">

          </Collapse>
          <Collapse title="Soporte">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
