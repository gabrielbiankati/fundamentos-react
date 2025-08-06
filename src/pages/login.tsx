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
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z.email("Digite um e-mail válido.").nonempty("O email é obrigatório."),
  password: z.string().nonempty("A senha é obrigatória.").min(8, "A senha deve ter pelo menos 8 caracteres."),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const { register, handleSubmit, formState: { errors}} = useForm({
    resolver: zodResolver(signInFormSchema)
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

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

          <VStack as="form" onSubmit={handleSubmit(handleSignIn)} align="flex-start" gap={6} mt={10}>
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500" fontSize="md">
                Email
              </Field.Label>
              <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black" {...register("email")}/>
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label color="gray.500" fontSize="md">
                Senha
              </Field.Label>
              <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black" {...register("password")}/>
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium">
              Lembre-me
            </Checkbox>

            <Button type="submit" w="100%" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
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
