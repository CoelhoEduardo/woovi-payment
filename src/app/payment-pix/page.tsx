"use client";

import { v4 as uuidv4 } from "uuid";
import { Header } from "../components";
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Radio, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";

export default function PixPayment() {
  const todayDate = new Date();
  const totalValue = 30600;
  const getUuid = uuidv4();
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: "8px",
    width: "230px",
    height: "25px",
    lineHeight: 1.5,
    marginTop: "15px",
    backgroundColor: "#133A6F",
    borderColor: "#133A6F",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#4D4D4D",
      borderColor: "#4D4D4D",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#133A6F",
      borderColor: "#133A6F",
    },
  });
  return (
    <Container maxWidth="sm">
      <Box
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Header subtitle="João, como você quer pagar ?" />
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
        <BootstrapButton variant="contained" disableRipple>
          <Typography fontSize={12} mr={1}>
            Clique para copiar QR CODE{" "}
          </Typography>
          <Image src="/copy.svg" alt="copy" width={14} height={14} />
        </BootstrapButton>
        <Box mt={2}>
          <Typography
            fontSize={12}
            mr={1}
            sx={{ color: "#B2B2B2", fontSize: "10px" }}
          >
            Prazo de pagamento:
          </Typography>
          <Typography
            fontSize={12}
            mr={1}
            sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "bold" }}
          >
            {todayDate
              .toLocaleString("pt-BR", {
                year: "numeric",
                day: "numeric",
                month: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
              .replace(",", " - ")}
          </Typography>
        </Box>

        <Box mt={3} sx={{display: 'flex',flexDirection: 'column', gap: '16px', width: '100%'}}>
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
          <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Typography
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px" }}
            >
              1ª entrada no Pix
            </Typography>
            <Typography
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "bold" }}
            >
              {(totalValue / 2).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Typography
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px" }}
            >
              2ª no cartão
            </Typography>
            <Typography
              fontSize={12}
              mr={1}
              sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "bold" }}
            >
              {(totalValue / 2).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </Box>
        </Box>

        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box mt={3} sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <Typography sx={{ fontSize: "12px", color: "#4D4D4D" }}>
            CET: 0,5%
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#4D4D4D" }}>
            Total:{" "}
            {totalValue.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
        </Box>
        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box mt={3} sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <Typography sx={{ fontSize: "12px", color: "#4D4D4D", fontWeight: "bold" }}>
              Como funciona?
          </Typography>
          <Box>
            <ExpandLessIcon />
          </Box>
        </Box>
        <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Typography
            fontSize={12}
            mr={1}
            sx={{ color: "#B2B2B2", fontSize: "10px" }}
          >
            Identificador:
          </Typography>
          <Typography
            fontSize={12}
            mr={1}
            sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "bold" }}
          >
            {getUuid}
          </Typography>
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
