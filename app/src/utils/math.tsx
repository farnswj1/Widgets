export const round = (value: number, decimals: number = 0) => {
  if (decimals === 0) {
    return Math.round(value);
  }

  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
}
