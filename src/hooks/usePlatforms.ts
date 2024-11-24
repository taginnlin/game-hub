import useData from "./useData"

export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>('/platforms/lists/parents')

  return {data, error, isLoading}
}

export default usePlatforms