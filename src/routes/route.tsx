import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Prices from '../pages/prices'

export const RouterConfig = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
