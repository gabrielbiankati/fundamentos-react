import { Button, HStack } from "@chakra-ui/react";
import {  IoIosAddCircleOutline } from "react-icons/io";

export function ActionButton() {
  return (
    <HStack>
      <Button colorPalette="black" variant="solid">
        <IoIosAddCircleOutline  />
      </Button>
    </HStack>
  );
}
