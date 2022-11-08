import { Text, Spacer, Button, Grid, Container, Card, Row } from "@nextui-org/react"
import { Box } from "./Box.js"
import { NotificationIcon } from '../media/icons/NotificationIcon';
import video from "../media/sword.mp4"
import Table from "./Table.jsx";
import Collapsed from "./Collapsed.jsx";
export const Content = () => (
  <>

    <Box css={{ px: "$12", backgroundColor: "Black", "@xsMax": { px: "$10" } }}>

      <Container>
        <video className='videoTag' autoPlay loop muted css={{ width: "50px", }}>
          <source src={video} type='video/mp4' />
        </video>

        <Row justify="center" align="center" >
          
          <Spacer y={1} />
          <Button size="xl"  icon={<NotificationIcon fill="currentColor" />} disabled shadow color="primary" auto>
          Notificarme
          </Button> 
          <Spacer x={2} />

          <Button size="xl" disabled shadow color="primary" auto>
          Disponible finales 2022
          </Button> 
          <Spacer y={1} />
          
        </Row>
        <Row justify="center" align="center" css={{}}>
          
          <Spacer y={1} />
          <Table />
          <Spacer y={1} />

        </Row>
       
        <Row justify="center" align="center" css={{}}>
          <Spacer y={1} />
          <Collapsed />
          <Spacer y={1} />

        </Row>
      </Container>

    </Box>
  </>
);

