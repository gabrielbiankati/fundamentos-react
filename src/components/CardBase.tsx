import { Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import type { ColorPalette } from "@chakra-ui/react/styled-system"

interface CardActivityProps {
  title: string;
  description: string;
  icon: IconType;
  colorPalette: ColorPalette;
}

export function CardBase({title, description, colorPalette, icon}: CardActivityProps) {
  return (
    <HStack gap={6} _hover={{ backgroundColor: "gray.50", rounded: "md", _dark: { backgroundColor: "gray.900" }}} p={4} >

      <Flex justify="center" align="center" backgroundColor={`${colorPalette}.100`} rounded="lg" p={2}>
        <Icon as={icon} size="xl" color={`${colorPalette}.700`}/>
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
}
