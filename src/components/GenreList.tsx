import useGenres, { Genre } from "../hooks/useGenres"
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react"

interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres()

  if (error) return null

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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
