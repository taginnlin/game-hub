import useData from "./useData"
import { Genre } from "./useGenres"
import { Platform } from './usePlatforms'

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatForm | null) => {
  const { data, error, isLoading } = useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])

  return { data, error, isLoading }
}

export default useGames