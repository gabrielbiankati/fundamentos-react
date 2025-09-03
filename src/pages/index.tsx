import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Card, FormatNumber, Stat } from "@chakra-ui/react";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <Card.Root>
        <Card.Body>
          <Stat.Root>
            <Stat.Label>Total de Estudantes</Stat.Label>
            <Stat.ValueText>
              <FormatNumber
                value={1340} />
            </Stat.ValueText>
            <Stat.UpIndicator alignSelf="start">+12% from last week</Stat.UpIndicator>
          </Stat.Root>
        </Card.Body>
      </Card.Root>
    </DefaultLayout>
  );
}
