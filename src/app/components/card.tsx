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
          sx={{ color: "#03D69D", fontSize: "12px", fontWeight: "300" }}
        >
          Ganhe <span style={{ fontWeight: "bold" }}> 3% </span> de Cashback
        </Typography>
        <Flag
          checked={checked}
          label={
            <>
              🤑 <span style={{ fontWeight: "bold" }}>R$ 300 </span> de volta no
              seu Pix na hora{" "}
            </>
          }
        />
      </Box>
    ) : (
      `Total ${totalValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`
    );

  const flagLabel =
    installments === 4 ? (
      <Flag
        checked={checked}
        label={
          <>
            <span style={{ fontWeight: "bold" }}>-3% de juros: </span>Melhor
            opção de parcelamento
          </>
        }
      />
    ) : null;

  const borderTopRadius =
    installments === 1 || installments === 2 ? "10px" : "0px";
  const borderBottomRadius =
    installments === 1 || installments === 7 ? "10px" : "0px";

  return (
    <Box sx={{ width: "320px", minWidth: "250px" }}>
      <List
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: checked ? "#d5f4e680" : "transparent",
          borderTop: checked ? "2px solid" : "1px solid",
          borderBottom: checked ? "2px solid" : "1px solid",
          borderLeft: "2px solid",
          borderRight: "2px solid",
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
              <Typography
                display="flex"
                gap={1}
                sx={{ color: "#4D4D4D", fontWeight: "500" }}
              >
                <span style={{ fontWeight: "800" }}>{installments}x</span>
                {installmentsValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
            }
            secondary={
              <Typography
                component="div"
                sx={{ fontSize: "12px", color: "#AFAFAF", fontWeight: "bold" }}
              >
                {labelTotal}
                {flagLabel}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{ position: "absolute", top: "15px", right: "0px" }}
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
