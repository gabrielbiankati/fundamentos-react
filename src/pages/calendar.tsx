import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Calendar() {
  return (
    <DefaultLayout
      title="Calendário Acadêmico"
      description="Gerencie eventos, aulas, provas e prazos importantes"
    >
      <Heading color={"red"}> Calendar</Heading>
    </DefaultLayout>
 );
}
