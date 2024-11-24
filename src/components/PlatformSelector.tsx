import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import React from "react"
import usePlatforms from "../hooks/usePlatforms"

const PlatformSelector = () => {
  const { data, error } = usePlatforms()

  if (error) return

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
