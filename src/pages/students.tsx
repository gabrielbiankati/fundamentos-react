import { ActionBar, HStack } from "@chakra-ui/react";
import { SearchInput } from "@/components/SearchInput";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { FilterStatus } from "@/components/FilterStatus";
import { OtherFilters } from "@/components/OtherFilters";
import { ExportButton } from "@/components/ExportButton";
import { ActionButton } from "@/components/ActionButton";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações do corpo docente"
    >
    <SearchInput  />
    
      <HStack mt="3">
        <FilterStatus />
        <OtherFilters />
        <ExportButton />
        <ActionButton />

      </HStack>
    </DefaultLayout>
  );
}

