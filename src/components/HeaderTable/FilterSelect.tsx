import { createListCollection, Portal, Select } from "@chakra-ui/react";

export function FilterSelect() {

    const frameworks = createListCollection({
    items: [
      { label: "Ativos", value: "ativos" },
      { label: "Inativos", value: "inativos" },
      { label: "Formados", value: "formados" },
    ],
  })
  return (

    <Select.Root collection={frameworks} size="md" width="320px">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Todos os Status" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
