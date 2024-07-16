"use client";

import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

export const PaymentInfo = ({ hasPay }: { hasPay: boolean }) => {
  const getUuid = uuidv4();
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
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mt={2}>
        <Box sx={{ color: "#B2B2B2", fontSize: "12px" }}>
          Prazo de pagamento:
        </Box>
        <Box sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "bold" }}>
          {todayDate}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          mt: "5px",
          ml: "65px",
        }}
      >
        <Box position="relative" sx={{ top: "40px", right: "18px" }} width={20}>
          <Box
            border={2}
            position="absolute"
            sx={{
              bottom: "10px",
              borderColor: "#03D69D",
              borderRadius: "100%",
              width: "10px",
              height: "10px",
              background: hasPay ? "#03D69D" : "none",
            }}
          />
          {hasPay ? (
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
          ) : null}
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
              borderColor: hasPay ? "#03D69D" : "#E5E5E5",
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
            width: "90%",
          }}
        >
          <Box fontSize={12} mr={1} sx={{ color: "#4D4D4D", fontSize: "12px" }}>
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
            width: "90%",
          }}
        >
          <Box fontSize={12} mr={1} sx={{ color: "#4D4D4D", fontSize: "12px" }}>
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
          width: "90%",
        }}
      >
        <Box sx={{ fontSize: "12px", color: "#4D4D4D" }}>CET: 0,5%</Box>
        <Box sx={{ fontSize: "12px", color: "#4D4D4D" }}>
          Total: {totalValue}
        </Box>
      </Box>
      <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} mt={3} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "97%",
        }}
      >
        <Accordion
          sx={{ border: "0px", fontSize: "12px", color: "#4D4D4D" }}
          variant="outlined"
        >
          <AccordionSummary
            sx={{ fontWeight: "bold" }}
            expandIcon={<ExpandMoreIcon />}
          >
            Como funciona ?
          </AccordionSummary>
          <AccordionDetails>
            A Woovi facilita pagamentos via Pix, QR Code e links de pagamento,
            oferecendo uma solução rápida e segura. Os usuários escaneiam o QR
            Code ou clicam no link gerado para concluir a transação
            instantaneamente.
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box border={1} sx={{ borderColor: "#E5E5E5", width: "100%" }} />
      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ color: "#B2B2B2", fontSize: "10px" }}>Identificador:</Box>
        <Box sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "bold" }}>
          <p suppressHydrationWarning>{getUuid}</p>
        </Box>
      </Box>
    </Box>
  );
};
