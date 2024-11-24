import useGenres from "../hooks/useGenres"
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"

const GenreList = () => {
  const { data, error, isLoading } = useGenres()

  if (error) return

  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
