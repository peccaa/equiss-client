export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currencySign: "accounting",
  }).format(value);
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString("nb-NO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "—";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}
