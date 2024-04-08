export const formatCurrency = (value: number, currencySymbol: string) => {
  if (typeof value !== 'number') {
    return '';
  }

  const formattedValue = value.toFixed(2);

  return `${currencySymbol}${formattedValue}`;
};