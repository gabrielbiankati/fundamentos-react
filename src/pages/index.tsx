import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import {  HStack } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { IoMdPeople, IoMdTrendingUp } from "react-icons/io";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >

      <HStack gap={6}>
        <IndicatorCard
        label="Total de Estudantes"
        value={2847}
        indicator="-12% este mês"
        icon={IoMdPeople}
        colorPallete="blue"
        />

        <IndicatorCard
        label="Professores Ativos"
        value={121}
        indicator="3% este mês"
        icon={GiTeacher}
        colorPallete="green"
        />

        <IndicatorCard
        label="Cursos Oferecidos"
        value={24}
        indicator="+2% este mês"
        icon={FaBook}
        colorPallete="purple"
        />

        <IndicatorCard
        label="Taxa de aprovação"
        value={0.892}
        indicator="+2.1% este mês"
        icon={IoMdTrendingUp}
        colorPallete="yellow"
        style="percent"
        maximumFractionDigits={2}
        minimumFractionDigits={2}
        />

      </HStack>
    </DefaultLayout>
  );
}
