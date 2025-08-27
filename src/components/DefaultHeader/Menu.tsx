import { CloseButton, Drawer, IconButton, Kbd, Portal } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

export function Menu() {
  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoMdMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Henrique Dos Santos Junkes</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              Press the <Kbd>esc</Kbd> key to close the drawer.
            </Drawer.Body>

            <Drawer.Footer>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>

          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
