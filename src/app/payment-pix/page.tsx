"use client";

import { ButtonApp, Header, PaymentInfo, SafetyFooter } from "../components";
import { Alert, AlertTitle, Box, Collapse, Container } from "@mui/material";
import Image from "next/image";
import { FileCopy } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PixPayment() {
  const [copy, setCopy] = useState(false);
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  const handleClick = () => {
    setCopy(true);
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(intervalId);
          router.push("/payment-credit");
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
  };
  return (
    <Container maxWidth="sm">
      <Header
        showingButton
        href="/"
        subtitle="João, pague a entrada de R$ 15.300,00 pelo Pix"
      />
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box
          border={2}
          sx={{ borderColor: "#03D69D", borderRadius: "10px" }}
          width={300}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/qr_code.png"
            alt="qr-code"
            width={290}
            height={290}
            priority
          />
        </Box>
        <ButtonApp
          label="Clique para copiar QR CODE"
          onClick={handleClick}
          icon={<FileCopy sx={{ width: "18px" }} />}
        />
        <Collapse in={copy}>
          <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}>
            <AlertTitle>Qr Code copiado com suceso</AlertTitle>
            Aguardando pagamento em {counter}
          </Alert>
        </Collapse>
        <PaymentInfo hasPay={false} />
        <SafetyFooter />
      </Box>
    </Container>
  );
}
