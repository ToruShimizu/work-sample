import { formatNumber } from '../utils/format-number'

describe('formatNumber', () => {
  test('常にstring型で返される', () => {
    const result = formatNumber(100)
    expect(typeof result === 'string').toBeTruthy()
  })
  test('常に整数で返される', () => {
    const num = 1000.14
    const result = formatNumber(num)

    expect(Number.isInteger(Number(result.replace(',', '')))).toBeTruthy()
    expect(result).toEqual(Math.trunc(num).toLocaleString())
  })
  test('4桁以上の場合、3桁ごとにカンマで区切られる', () => {
    const NUM_1 = 1000
    const NUM_2 = 1000000
    const RESULT_1 = formatNumber(NUM_1)
    const RESULT_2 = formatNumber(NUM_2)

    expect(RESULT_1).toEqual(NUM_1.toLocaleString())
    expect(RESULT_2).toEqual(NUM_2.toLocaleString())
  })
  test('負の数の場合、3桁ごとにカンマで区切られる', () => {
    const num = -1000000
    const result = formatNumber(num)

    expect(result).toEqual(Math.trunc(num).toLocaleString())
  })
})
