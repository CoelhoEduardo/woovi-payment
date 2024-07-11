"use client";

import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Radio,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const CardBody = ({
  installments,
  installmentsValue,
  totalValue,
  getIndex = 1,
	hasLastIndex = false,
}: {
  installments: number;
  installmentsValue: number;
  totalValue: number;
  getIndex: number;
	hasLastIndex?: boolean;
}) => {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(selected => !selected);
  };

  const labelTotal =
    installments === 1 ? (
      <Box sx={{ color: "#03D69D", fontSize: "10px", fontWeight: "bold" }}>
        Ganhe 3% de Cashback
      </Box>
    ) : (
      `Total ${totalValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`
    );

  return (
    <Box>
      <ListItem
        secondaryAction={
          <Radio
            checked={selected}
            onChange={handleChange}
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            value={installments}
            sx={{ color: "#E5E5E5" }}
          />
        }
      >
        <ListItemText
          primary={
            <React.Fragment>
              <Box display="flex" gap={1} sx={{color: '#4D4D4D',}}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {installments}x
                </Typography>
                <Typography>
                  {installmentsValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Typography>
              </Box>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ fontSize: "10px", color: "#AFAFAF", fontWeight: "bold" }}
              >
                {labelTotal}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      {hasLastIndex ? <Divider /> : <Box />}
    </Box>
  );
};

export const Card = ({
  cardBody,
  chipLabel,
  marginTop,
}: {
  marginTop?: number;
  cardBody: React.JSX.Element | React.JSX.Element[];
  chipLabel: string;
}) => {
  const style = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    marginTop: { marginTop },
  };
  return (
    <List sx={style}>
      <Chip
        label={chipLabel}
        sx={{
          fontWeight: "bold",
          height: "25px",
          marginTop: "-25px",
          marginLeft: "15px",
          backgroundColor: "#E5E5E5",
        }}
      />
      {cardBody}
    </List>
  );
};
