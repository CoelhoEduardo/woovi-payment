"use client";

import { Check } from "@mui/icons-material";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Radio,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { Flag } from "./flag";

export const Card = ({
  installments,
  installmentsValue,
  totalValue,
  checked,
  handleChange,
  onFocus,
  chipLabel,
}: {
  installments: number;
  installmentsValue: number;
  totalValue: number;
  getIndex: number;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  chipLabel?: string;
}): JSX.Element => {
  const labelTotal =
    installments === 1 ? (
      <Box>
        <Typography
          sx={{ color: "#03D69D", fontSize: "10px", fontWeight: "bold" }}
        >
          Ganhe 3% de Cashback
        </Typography>
        <Flag checked={checked} label="🤑 R$ 300,00 de volta no seu Pix na hora" />
      </Box>
    ) : (
      `Total ${totalValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`
    );

  const flagLabel =
    installments === 4 ? (
      <Flag checked={checked} label="-3% de juros: Melhor opção de parcelamento" />
    ) : null;

  const borderTopRadius =
    installments === 1 || installments === 2 ? "10px" : "0px";
  const borderBottomRadius =
    installments === 1 || installments === 7 ? "10px" : "0px";

  return (
    <Box sx={{ width: "280px" }}>
      <List
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: checked ? "#d5f4e680" : "transparent",
          border: checked ? "1.5px solid" : "1px solid",
          borderTopLeftRadius: borderTopRadius,
          borderTopRightRadius: borderTopRadius,
          borderBottomLeftRadius: borderBottomRadius,
          borderBottomRightRadius: borderBottomRadius,
          borderColor: checked ? "#03D69D" : "#E5E5E5",
        }}
      >
        {installments === 1 || installments === 2 ? (
          <Chip
            label={chipLabel}
            sx={{
              fontWeight: "bold",
              height: "25px",
              position: "absolute",
              top: "-13px",
              left: "20px",
              backgroundColor: "#E5E5E5",
            }}
          />
        ) : null}
        <ListItem>
          <ListItemText
            primary={
              <Typography display="flex" gap={1} sx={{ color: "#4D4D4D" }}>
                <span style={{ fontWeight: "bold" }}>{installments}x</span>
                {installmentsValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
            }
            secondary={
              <Typography
                component="div"
                sx={{ fontSize: "10px", color: "#AFAFAF", fontWeight: "bold" }}
              >
                {labelTotal}
                {flagLabel}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{ position: "absolute", top: "10px", right: "0px" }}
          secondaryAction={
            <Radio
              onFocus={onFocus}
              checked={checked}
              onChange={handleChange}
              name="radio-buttons"
              value={installments}
              sx={{
                color: "#E5E5E5",
                "&.Mui-checked .MuiSvgIcon-root": {
                  fill: "#FFF",
                  backgroundColor: "#03D69D",
                  borderRadius: "100%",
                  width: "20px",
                  height: "20px",
                },
              }}
              checkedIcon={<Check />}
            />
          }
        />
      </List>
    </Box>
  );
};
