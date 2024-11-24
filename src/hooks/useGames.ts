import useData from "./useData"
import { Genre } from "./useGenres"

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
}

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

  return { data, error, isLoading }
}

export default useGames