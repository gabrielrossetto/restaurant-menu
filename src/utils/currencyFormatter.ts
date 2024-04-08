export const formatCurrency = (value: number, currencySymbol: string | undefined) => {
  if (typeof value !== 'number') {
    return '';
  }

  if (!currencySymbol) {
    return ''
  }

  const formattedValue = value.toFixed(2);

  return `${currencySymbol}${formattedValue}`;
};