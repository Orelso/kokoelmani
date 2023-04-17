import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}

interface Props {
  defaultCurrency: Currency;
  onChange: (currency: Currency) => void;
}

export const CurrencyTab = ({
  defaultCurrency = Currency.USD,
  onChange,
}: Props) => {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedCurrency = event.target.value as Currency;
    setCurrency(selectedCurrency);
    onChange(selectedCurrency);
  };

  return (
    <Select value={currency} onChange={handleChange}>
      <MenuItem value={Currency.USD}>USD</MenuItem>
      <MenuItem value={Currency.EUR}>EUR</MenuItem>
      <MenuItem value={Currency.GBP}>GBP</MenuItem>
    </Select>
  );
};