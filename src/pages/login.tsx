import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/login-image.gif";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">
        <Image w={400} h={400} src={loginImage.src}></Image>
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as="h1" fontSize="3xl" fontWeight="bold" color="black">
            Entrar
          </Heading>
          <Text color="gray.500" fontWeight="400" fontSize="lg">
            Se você já é membro, pode fazer login com seu endereço de email e
            senha.
          </Text>

          <VStack align="flex-start" gap={6} mt={10}>
            <Field.Root>
              <Field.Label color="gray.500" fontSize="md">
                Email
              </Field.Label>
              <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black"/>
            </Field.Root>

            <Field.Root>
              <Field.Label color="gray.500" fontSize="md">
                Senha
              </Field.Label>
              <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black"/>
            </Field.Root>

            <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium">
              Lembre-me
            </Checkbox>

            <Button w="100%" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
              Entrar
            </Button>
          </VStack>

          <HStack justify="center" gap={1} mt={10}>
            <Text fontSize="md" fontWeight="medium" color="gray.500">
              Não possui uma conta?
            </Text>
            <ChakraLink color="blue.500" asChild>
              <NextLink href="/sign-up">Crie uma conta aqui!</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
