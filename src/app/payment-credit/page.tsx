"use client";

import { v4 as uuidv4 } from "uuid";
import { ButtonApp, Header, PaymentInfo } from "../components";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 100,
  bgcolor: "#03D69D",
  border: "3px solid #fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function PixPayment() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const value = 30600;
  const valueToPay = (value / 2).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container maxWidth="sm">
      <Header
        showingButton
        href="/payment-pix"
        subtitle="João, pague o restante em 1x no cartão"
      />
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box component="form" display="grid" justifyItems="center">
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="name" label="Nome completo" required />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="cpf" label="CPF" type="document" required />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <TextField id="card-number" label="Número do cartão" required />
          </FormControl>
          <Box display="flex">
            <FormControl sx={{ m: 1, width: 150}}>
              <TextField id="maturity" label="Vencimento" required />
            </FormControl>
            <FormControl sx={{ m: 1, width: 150 }}>
              <TextField id="cvv" label="CVV" required />
            </FormControl>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <InputLabel id="simple-select-label">Parcelas</InputLabel>
            <Select required id="installments" label="Parcelas">
              <MenuItem value={valueToPay}>1x {valueToPay}</MenuItem>
            </Select>
          </FormControl>
          <ButtonApp onClick={handleOpen} type="submit" label="Pagar" />
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Image
              src="/logo_white.svg"
              alt="Woovi logo"
              width={150}
              height={37}
              priority
            />
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: "#fff", fontWeight: "bold" }}
            >
              Pagamento realizado com sucesso
            </Typography>
          </Box>
        </Modal>
        <PaymentInfo hasPay />
        <Box mt={3} sx={{ color: "#B2B2B2", fontSize: "10px" }}>
          <Image alt="safe icon" width={15} height={15} src="/safe_icon.svg" />{" "}
          Pagamento 100% seguro via:{" "}
          <Image alt="logo" width={38} height={12} src="/mini_logo.svg" />
        </Box>
      </Box>
    </Container>
  );
}
