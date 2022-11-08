import { Table } from "@nextui-org/react";

export default function DetailsReq() {
  return (
    <Table
      aria-label="Example static collection table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="single"
    >
      <Table.Header>
        <Table.Column>0</Table.Column>
        <Table.Column>Requisitos Minimos</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Procesador</Table.Cell>
          <Table.Cell>Procesador a 1 GHz o más rápido o sistema en un chip (SoC)</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>RAM:</Table.Cell>
          <Table.Cell>1 GB para 32 bits o 2 GB para 64 bits</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Espacio en disco duro:</Table.Cell>
          <Table.Cell>16 GB para un SO de 32 bits o 32 GB para un SO de 64 bits
</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Tarjeta gráfica:</Table.Cell>
          <Table.Cell>DirectX 9 o posterior con un controlador WDDM 1.0
</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
