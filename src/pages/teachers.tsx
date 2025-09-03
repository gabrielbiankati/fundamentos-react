import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Teachers() {
  return (
    <DefaultLayout
      title="Gestão de Professores"
      description="Gerencie informações do corpo docente">

      <Heading color={"red"}> Teachers</Heading>
    </DefaultLayout>
 );
}
