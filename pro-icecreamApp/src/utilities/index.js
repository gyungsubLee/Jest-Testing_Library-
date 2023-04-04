/**
 * @function formatCurrency
 * Format number as currency (US Dollars)
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => $0.00
 *
 * @example
 *   formatCurrency(1.5)
 *   // => $1.50
 *
 */
export function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
}

export function formatCapitalzationWord(word) {
  // javascript에서 string 타입 array와 같이 index 사용 가능 -> 이건 좀...ㄷㄷ
  return word[0].toUppderCase() + word.slice(1).toLowerCase();
}
