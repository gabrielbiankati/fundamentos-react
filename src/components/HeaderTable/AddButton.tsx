import { Button, HStack } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";



export function AddButton() {
  return (
    <HStack>
      <Button colorPalette="purple" variant="solid">
        <BiPlus  /> Novo estudante
      </Button>
    </HStack>
  );
}
