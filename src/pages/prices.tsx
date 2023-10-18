import './prices.css'
import { type PaperInfo, usePricesFetcher } from '../hooks/fetchers/prices-fetcher'
import { useState } from 'react'

type PaperSize = 'A4' | 'A5' | 'B4' | 'B5'

const PAPER_SIZES: PaperSize[] = ['A4', 'A5', 'B4', 'B5']
const DEFAULT_PAPER_SIZE = 'A4'
const BUSINESS_DAYS = [1, 2, 3, 4, 5]

const filterPrices = (prices: PaperInfo[][], quantity: number): PaperInfo[] => {
  return prices
    .map((items) => items.filter((item) => item.quantity === quantity))
    .flatMap((value) => value)
}

function Prices(): JSX.Element {
  const [paperSize, setPaperSize] = useState(DEFAULT_PAPER_SIZE)
  const [selectedPageSize, setSelectedPageSize] = useState(DEFAULT_PAPER_SIZE)

  const { data, isValidating } = usePricesFetcher(paperSize)

  const prices = data?.prices ?? []
  const quantities = prices.map((price) => price[0].quantity)

  return (
    <div className="pages-prices">
      <div className="prices-container">
        <div className="size-wrapper">
          <div>
            <label htmlFor="size">検索条件</label>
          </div>
          <div>
            <select
              name="size"
              id="size"
              className="size"
              onChange={(e) => {
                setSelectedPageSize(e.target.value)
              }}
            >
              {PAPER_SIZES.map((size) => (
                <option key={size} value={size} defaultValue={DEFAULT_PAPER_SIZE}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button
            className="adoption-button"
            onClick={() => {
              setPaperSize(selectedPageSize)
            }}
          >
            適用
          </button>
        </div>
        <div className="table-wrapper">
          <p>価格表</p>
          {isValidating ? (
            <span className="loading">Loading...</span>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th />
                  {BUSINESS_DAYS.map((day) => (
                    <th key={day} className="table-header">
                      {day}日
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quantities.map((quantity) => {
                  const filteredPrices = filterPrices(prices, quantity)
                  return (
                    <tr key={quantity}>
                      <th className="table-header">{quantity}部数</th>
                      {filteredPrices.map((item) => (
                        <td key={item.price} className="table-data">
                          {item.price}円
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="amount-wrapper">
          <p className="amount">注文金額 9999円</p>
          <button>カート</button>
        </div>
      </div>
    </div>
  )
}

export default Prices
