import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatFormList from "./PlatFormList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../service/image-url"
import Emoji from "./Emoji"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
