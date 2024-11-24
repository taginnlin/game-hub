import { useEffect, useState } from "react"
import apiClient from "../service/api-client"
import { CanceledError } from "axios"
import useData from "./useData"

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

const useGenres = () => {
  const {data, error, isLoading} = useData<Genre>('/genres')

  return { data, error, isLoading }
}

export default useGenres