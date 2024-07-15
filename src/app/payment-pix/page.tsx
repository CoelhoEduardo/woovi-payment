"use client";

import { v4 as uuidv4 } from "uuid";
import { ButtonApp, Header } from "../components";
import { Box, Container, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import { FileCopy } from "@mui/icons-material";

export default function PixPayment() {
  const todayDate = new Date()
    .toLocaleString("pt-BR", {
      year: "numeric",
      day: "numeric",
      month: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", " - ");
  const value = 30600;
  const totalValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const valueToPay = (value / 2).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const getUuid = uuidv4();

  return (
    <Container maxWidth="sm">
      <Header showingButton href="/" subtitle="João, pague a entrada de R$ 15.300,00 pelo Pix" />
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
          href="/payment-credit"
          icon={<FileCopy sx={{ width: "18px" }} />}
        />
        <Box mt={2}>
          <Box
            fontSize={12}
            mr={1}
            sx={{ color: "#B2B2B2", fontSize: "10px" }}
          >
            Prazo de pagamento:
          </Box>
          <Box
            fontSize={12}
            mr={1}
            sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "bold" }}
          >
            {todayDate}
          </Box>
        </Box>

        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <Box
            position="relative"
            sx={{ top: "42px", right: "18px" }}
            width={20}
          >
            <Box
              border={2}
              position="absolute"
              sx={{
                bottom: "10px",
                borderColor: "#03D69D",
                borderRadius: "100%",
                width: "10px",
                height: "10px",
              }}
            />
            <Box
              border={1}
              position="absolute"
              sx={{
                right: "2px",
                borderColor: "#E5E5E5",
                width: "20px",
                transform: "rotate(90deg)",
              }}
            />
            <Box
              border={2}
              position="absolute"
              sx={{
                top: "10px",
                borderColor: "#E5E5E5",
                borderRadius: "100%",
                width: "10px",
                height: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px" }}
            >
              1ª entrada no Pix
            </Box>
            <Box
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "bold" }}
            >
              {valueToPay}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px" }}
            >
              2ª no cartão
            </Box>
            <Box
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "bold" }}
            >
              {valueToPay}
            </Box>
          </Box>
        </Box>

        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box
          mt={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ fontSize: "12px", color: "#4D4D4D" }}>
            CET: 0,5%
          </Box>
          <Box sx={{ fontSize: "12px", color: "#4D4D4D" }}>
            Total: {totalValue}
          </Box>
        </Box>
        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box
          mt={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{ fontSize: "12px", color: "#4D4D4D", fontWeight: "bold" }}
          >
            Como funciona?
          </Box>
          <Box>
            <ExpandLessIcon />
          </Box>
        </Box>
        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Box
            fontSize={12}
            mr={1}
            sx={{ color: "#B2B2B2", fontSize: "10px" }}
          >
            Identificador:
          </Box>
          <Box
            fontSize={12}
            mr={1}
            sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "bold" }}
          >
            {getUuid}
          </Box>
        </Box>
        <Box mt={5} sx={{ color: "#B2B2B2", fontSize: "10px" }}>
          <Image alt="safe icon" width={15} height={15} src="/safe_icon.svg" />{" "}
          Pagamento 100% seguro via:{" "}
          <Image alt="logo" width={38} height={12} src="/mini_logo.svg" />
        </Box>
      </Box>
    </Container>
  );
}
