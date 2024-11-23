import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { PlatForm } from '../hooks/useGames'
import { Icon, HStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platforms: PlatForm[]
}

const PlatFormList = ({platforms}: Props) => {
  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    androis: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack marginY={1}>
      {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]}/>)}
    </HStack>
  )
}

export default PlatFormList