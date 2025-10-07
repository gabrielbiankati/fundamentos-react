import { HeaderTable } from "@/components/HeaderTable";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <HeaderTable />
    </DefaultLayout>
  );
}
