"use client";

import { v4 as uuidv4 } from "uuid";
import { ButtonApp, Header } from "../components";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useEffect } from "react";

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

  useEffect(() => {
    new Date();
    uuidv4();
  }, [getUuid, todayDate]);

  return (
    <Container maxWidth="sm">
      <Header showingButton href="/payment-pix" subtitle="João, pague o restante em 1x no cartão" />
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box component="form" display="grid">
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="name" label="Nome completo" required />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="name" label="CPF" type="document" required />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="name" label="Número do cartão" required />
          </FormControl>
          <Box display="flex">
            <FormControl sx={{ m: 1, minWidth: 160 }}>
              <TextField id="name" label="Vencimento" required />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 160 }}>
              <TextField id="name" label="CVV" required />
            </FormControl>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Parcelas"
            >
              <MenuItem value={10}>1x {valueToPay}</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <ButtonApp label="Pagar" />
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
                background: "#03D69D",
              }}
            />
            <CheckIcon
              sx={{
                position: "absolute",
                color: "#FFF",
                bottom: "12px",
                width: "10px",
                height: "10px",
                left: "2px",
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
                borderColor: "#03D69D",
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
