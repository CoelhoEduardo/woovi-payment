"use client";

import { ButtonApp, Header, PaymentInfo, SafetyFooter } from "../components";
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

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  height: 100,
  bgcolor: "#03D69D",
  border: "3px solid #fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const styleForm = {
  m: 1,
  minWidth: 320,
};

export default function PixPayment() {
  const initState = {
    name: "João Linaldo dias Fraga Santos",
    cpf: "405.503.503-15",
    cardNumber: "405.503.503-15",
    validate: "10/25",
    cvv: "405",
    installments: 15300,
  };
  const [formData, setFormData] = useState(initState);
  const [open, setOpen] = useState(false);
  const value = 30600;
  const valueToPay = (value / 2).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormData(initState);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="sm">
      <Header
        showingButton
        href="/payment-pix"
        subtitle="João, pague o restante em 1x no cartão"
      />
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="grid"
          justifyItems="center"
        >
          <FormControl sx={styleForm}>
            <TextField
              onChange={handleChange}
              id="name"
              name="name"
              value={formData.name}
              label="Nome completo"
              required
            />
          </FormControl>
          <FormControl sx={styleForm}>
            <TextField
              id="cpf"
              name="cpf"
              onChange={handleChange}
              value={formData.cpf}
              label="CPF"
              type="document"
              required
            />
          </FormControl>
          <FormControl sx={styleForm}>
            <TextField
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              label="Número do cartão"
              required
            />
          </FormControl>
          <Box display="flex">
            <FormControl sx={{ m: 1, width: 150 }}>
              <TextField
                id="validate"
                name="validate"
                onChange={handleChange}
                value={formData.validate}
                label="Vencimento"
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 150 }}>
              <TextField
                id="cvv"
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Box>
          <FormControl sx={styleForm}>
            <InputLabel id="simple-select-label">Parcelas</InputLabel>
            <Select
              required
              id="installments"
              name="installments"
              defaultValue={15300}
              onChange={handleChange}
              value={formData.installments}
              label="Parcelas"
            >
              <MenuItem value={15300}>1x {valueToPay}</MenuItem>
            </Select>
          </FormControl>
          <ButtonApp type="submit" label="Pagar" onClick={handleOpen} />
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={styleModal}>
            <Image
              src="/logo_white.svg"
              alt="Woovi logo"
              width={150}
              height={37}
              priority
            />
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Pagamento realizado com sucesso {formData.name.split(" ")[0]} 💙
            </Typography>
          </Box>
        </Modal>
        <PaymentInfo hasPay />
        <SafetyFooter />
      </Box>
    </Container>
  );
}
