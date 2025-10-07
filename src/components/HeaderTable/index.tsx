import { Card, HStack, SimpleGrid } from "@chakra-ui/react";
import { AddButton } from "./AddButton";
import { ExportButton } from "./ExportButton";
import { FilterButton } from "./FilterButton";
import { FilterSelect } from "./FilterSelect";
import { SearchInput } from "./SearchInput";

export function HeaderTable() {
  return (
    <HStack>
      <Card.Root>
        <Card.Body>
          <SimpleGrid row={2} rowGap={4}>
            <SearchInput
              placeholder="Buscar por nome, email ou curso..."
              value=""
              onChange={(e) => console.log(e.target.value)}
            />

            <HStack>

              <FilterSelect />
              <FilterButton />
              <ExportButton />
              <AddButton />

            </HStack>
          </SimpleGrid>
        </Card.Body>
      </Card.Root>
    </HStack>
  );
}
