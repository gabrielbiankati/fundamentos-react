import { Flex, Group, Separator } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Help } from "./Help";
import { Settings } from "./Settings";
import { ColorMode } from "./ColorMode";
import { Menu } from "./Menu";
import { Profile } from "./Profile";

export function DefaultHeader() {
  return (
    <Flex flexDir="column">
      <Flex
        w="full"
        justify="space-between"
        borderBottomWidth={1}
        py={2}
        px={4}
      >
        <Flex align="center" gap={4}>
          <Menu />

          <Logo />
        </Flex>

        <Group>
          <Notifications />

          <Help />

          <Settings />

          <ColorMode />

          <Separator h={6} colorPalette="gray" orientation="vertical" mx={2} />

          <Profile />
        </Group>
      </Flex>
    </Flex>
  );
}
