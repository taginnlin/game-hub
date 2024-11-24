import { useEffect, useState } from "react"
import apiClient from "../service/api-client"
import { CanceledError } from "axios"
import useData from "./useData"

export interface PlatForm {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: PlatForm}[]
  metacritic: number
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const {data, error, isLoading} = useData<Game>('/games')

  return { data, error, isLoading }
}

export default useGames