import './prices.css'

type PaperSize = 'A4' | 'A5' | 'B4' | 'B5'

const PAPER_SIZES: PaperSize[] = ['A4', 'A5', 'B4', 'B5']
const BUSINESS_DAYS = [1, 2, 3, 4, 5]

function Prices(): JSX.Element {
  return (
    <div className="pages-prices">
      <div className="prices-container">
        <div className="size-wrapper">
          <div>
            <label htmlFor="size">検索条件</label>
          </div>
          <div>
            <select name="size" id="size" className="size">
              {PAPER_SIZES.map((size) => (
                <option key={size} value={size} defaultValue="A4">
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button className="adoption-button">適用</button>
        </div>

        <div className="table-wrapper">
          <p>価格表</p>
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
              <tr>
                <th className="table-header">100部数</th>
                <td className="table-data">1000円</td>
              </tr>
            </tbody>
          </table>
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
