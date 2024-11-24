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

const useGames = () => {
  const {data, error, isLoading} = useData<Game>('/games')

  return { data, error, isLoading }
}

export default useGames