"use client";

import { ButtonApp, Card, Header } from "./components";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [selected, setSelected] = useState(2);
  const initialValue = 30500;
  const percentPerInstallments = 0.165;

  function getTotalValue(
    initalValue: number,
    numberInstallments: number,
    percent: number
  ) {
    const valuePerInstallments = initalValue * (percent / 100);
    const valueIncrease =
      valuePerInstallments *
      (numberInstallments === 1 ? 0 : numberInstallments);
    const totalValue = initalValue + valueIncrease;
    return Math.floor(totalValue);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(+event.target.value);
  };
  return (
    <Container maxWidth="sm">
      <Header subtitle="João, como você quer pagar ?" />
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Card
            onFocus={() => setSelected(1)}
            installments={1}
            checked={selected === 1}
            handleChange={handleChange}
            installmentsValue={initialValue}
            totalValue={initialValue}
            getIndex={1}
            chipLabel="Pix"
          />
        </Box>
        <Box sx={{ mt: "20px" }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              checked={selected === index + 2}
              onFocus={() => setSelected(index + 2)}
              handleChange={handleChange}
              key={index + 2}
              getIndex={index + 2}
              installments={index + 2}
              installmentsValue={
                getTotalValue(initialValue, index + 2, percentPerInstallments) /
                (index + 2)
              }
              totalValue={getTotalValue(
                initialValue,
                index + 2,
                percentPerInstallments
              )}
              chipLabel="Pix Parcelado"
            />
          ))}
        </Box>
        <ButtonApp href="/payment-pix" label="Próximo" />
        <Box mt={5} sx={{ color: "#B2B2B2", fontSize: "10px" }}>
          <Image alt="safe icon" width={15} height={15} src="/safe_icon.svg" />{" "}
          Pagamento 100% seguro via:{" "}
          <Image alt="logo" width={38} height={12} src="/mini_logo.svg" />
        </Box>
      </Box>
    </Container>
  );
}
