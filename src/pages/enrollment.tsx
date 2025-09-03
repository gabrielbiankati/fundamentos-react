import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Enrollment() {
  return (
    <DefaultLayout
      title="Gestão de Matrículas"
      description="Gerencie as matriculas dos estudantes para o proximo semestre">
      <Heading color={"red"}> Enrollment</Heading>
    </DefaultLayout>
 );
}
