import React, { createContext, useContext } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amount: number) => string;
  convertPrice: (amount: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const formatPKR = (amount: number | string | undefined | null): string => {
  if (amount === undefined || amount === null) return 'Rs. 0';
  const num = typeof amount === 'string' ? parseFloat(amount) : Number(amount);
  if (isNaN(num)) return 'Rs. 0';
  // Normalize legacy demo prices if under 500 to realistic Pakistani Rupee equivalent
  const pkrValue = num > 0 && num < 500 ? Math.round(num * 100) : Math.round(num);
  return `Rs. ${pkrValue.toLocaleString('en-PK')}`;
};

export const getNumericPKR = (amount: number | string | undefined | null): number => {
  if (amount === undefined || amount === null) return 0;
  const num = typeof amount === 'string' ? parseFloat(amount) : Number(amount);
  if (isNaN(num)) return 0;
  return num > 0 && num < 500 ? Math.round(num * 100) : Math.round(num);
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currency: Currency = 'PKR';

  const setCurrency = (_c: Currency) => {
    // Store is available strictly in Pakistani Rupees (PKR)
  };

  const convertPrice = (amount: number): number => {
    return getNumericPKR(amount);
  };

  const formatPrice = (amount: number): string => {
    return formatPKR(amount);
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
