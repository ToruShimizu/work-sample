import axios from 'axios'
import useSWR, { type SWRResponse } from 'swr'

export interface PaperInfoResponse {
  paper_size: string
  prices: PaperInfo[][]
}

export interface PaperInfo {
  business_day: number
  price: number
  quantity: number
}

const baseUrl = 'https://us-central1-fe-ws-test.cloudfunctions.net'

export const usePricesFetcher = (size: string): SWRResponse<PaperInfoResponse, any, any> => {
  const key = new URL(`prices?paper_size=${size}`, baseUrl).href
  const fetcher = async (url: string): Promise<PaperInfoResponse> =>
    await axios.get<PaperInfoResponse>(url).then((res) => res.data)

  return useSWR(key, fetcher)
}
