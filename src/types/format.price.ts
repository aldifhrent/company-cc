export const formatPrice = (price: number): string => {
  if (isNaN(price)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};
