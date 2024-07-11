"use client";

import { Card, Header } from "./components";
import { Box, Container } from "@mui/material";
import { CardBody } from "./components/card";
import Image from "next/image";

export default function Home() {
  const totalValue = 30500;
  const totalInstal = totalValue + (1 / 100) * 10000;
  return (
    <Container maxWidth="sm">
      <Box
        m={2}
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Header subtitle="João, como você quer pagar ?" />
        <Card
          chipLabel="Pix"
          cardBody={
            <CardBody
              installments={1}
              installmentsValue={totalValue}
              totalValue={30500}
              getIndex={1}
            />
          }
        />
        <Card
          marginTop={20}
          chipLabel="Pix Parcelado"
          cardBody={Array.from({ length: 6 }).map((_, index) => (
            <CardBody
              key={index}
              getIndex={index + 2}
              installments={index + 2}
              installmentsValue={totalInstal / (index + 2)}
              totalValue={totalInstal}
              hasLastIndex={index !== 6 - 1}
            />
          ))}
        />
        <Box mt={5} sx={{ color: "#B2B2B2", fontSize: "10px" }}>
          <Image alt="safe icon" width={15} height={15} src="/safe_icon.svg" />
          {" "}Pagamento 100% seguro via: {" "}
          <Image alt="logo" width={38} height={12} src="/mini_logo.svg" />
        </Box>
      </Box>
    </Container>
  );
}
