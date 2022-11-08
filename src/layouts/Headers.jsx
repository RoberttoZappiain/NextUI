import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import Logo from "../media/sword.png"

export default function Headers() {
  const collapseItems = [
    "Descargar",
    "Preguntas Frecuentes",
    "Ayuda"    
  ];

  return (
    <Layout>
      <Navbar 
      isBordered 
      css={{
        backgroundColor: 'black'
      }}
      variant="sticky">
        <Navbar.Toggle showIn="xs"   />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
              

          }}
        >
                <img src={Logo} alt="Your SVG" />
        
        </Navbar.Brand>
        <Navbar.Content
        
          enableCursorHighlight
          activeColor="error"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">Descargar</Navbar.Link>
          <Navbar.Link isActive href="#">
            Preguntas Frecuentes
          </Navbar.Link>
          <Navbar.Link href="#">Ayuda</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
