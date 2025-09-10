import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import {  Card, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillAmazonCircle, AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";
import { GiFamas, GiTeacher } from "react-icons/gi";
import { IoIosBook, IoMdPeople, IoMdTrendingUp } from "react-icons/io";
import { LuCigarette } from "react-icons/lu";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás"
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás"
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás"
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás"
    },
  ];

  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

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

      <HStack mt={8}>
        <Card.Root>
          <Card.Header>
            <Card.Title >Atividades Recentes</Card.Title>
          </Card.Header>

          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon = iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <RecentActivity
                key={activity.id}
                colorPalette="blue"
                icon={ActivityIcon}
                title={activity.title}
                description={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
