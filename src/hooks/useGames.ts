import useData from "./useData"
import { GameQuery } from "../App";

export interface PlatForm {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: PlatForm }[]
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>('/games', { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.ordering } }, [gameQuery])

  return { data, error, isLoading }
}

export default useGames