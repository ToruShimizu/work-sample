/**
 * 数字を3桁カンマ区切りの文字列に変換する
 * @param number 変換する数値
 * @return 3桁カンマ区切りの文字列。常に整数で返される
 * @example
 * formatNumber(1000) // => '1,000'
 * formatNumber(1000.12) // => '1,000'
 */
export const formatNumber = (number: number): string => {
  const convertedNumber = Math.trunc(number)

  return String(convertedNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
