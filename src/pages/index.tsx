import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <HStack gap={6}>
        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Total de Estudantes</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={1340} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+12% este mes</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p={4}>
              <Icon size="xl" color="blue.700">
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Total de Professpres</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={121} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+1% este mes</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p={4}>
              <Icon size="xl" color="blue.700">
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Total de Estudantes</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={0.145} style="percent" maximumFractionDigits={2} minimumFractionDigits={2} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+12% from last week</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p={4}>
              <Icon size="xl" color="blue.700">
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Cursos Oferecidos</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={0.145} style="percent" maximumFractionDigits={2} minimumFractionDigits={2} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+1% este mes</Stat.UpIndicator>
            </Stat.Root>

            <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p={4}>
              <Icon size="xl" color="blue.700">
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
