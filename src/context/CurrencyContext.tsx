import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInCHF: number) => string;
  convertPrice: (amountInCHF: number) => number;
}

const RATES: Record<Currency, number> = {
  CHF: 1.0,
  EUR: 1.04,
  USD: 1.12,
  GBP: 0.88
};

const SYMBOLS: Record<Currency, string> = {
  CHF: 'CHF',
  EUR: '€',
  USD: '$',
  GBP: '£'
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('soule_currency_pref');
    return (saved as Currency) || 'CHF';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('soule_currency_pref', c);
  };

  const convertPrice = (amountInCHF: number): number => {
    const rate = RATES[currency] || 1.0;
    return Number((amountInCHF * rate).toFixed(2));
  };

  const formatPrice = (amountInCHF: number): string => {
    const converted = convertPrice(amountInCHF);
    const symbol = SYMBOLS[currency];
    if (currency === 'CHF') {
      return `CHF ${converted.toFixed(2)}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
};
