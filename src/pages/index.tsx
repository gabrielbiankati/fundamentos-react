import { IndicatorCard } from "@/components/IndicatorCard";
import { CardBase } from "@/components/CardBase";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import {  Card, ColorPalette, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {  AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { IoIosBook, IoMdPeople, IoMdTrendingUp } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

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
      title: "Novo curso criado: Análise de Dados",
      time: "1 hora atrás"
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás"
    },
  ];

const upcomingEvents = [
    {
      id: 1,
      title: "Início das Provas Finais",
      dateTime: "15 Dez 2025 às 08:00",
      type: "alert",
      color: "red"
    },
    {
      id: 2,
      type: "meting",
      title: "Reunião de Coordenadores",
      dateTime: "18 Dez 2025 às 10:00",
      color: "blue"
    },
    {
      id: 3,
      type: "calendar",
      title: "Fim do semestre",
      dateTime: "20 Dez 2025 às 17:00",
      color: "orange"
    },
  ];


  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
    alert: IoAlertCircleOutline,
    meting: BsPeopleFill
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

      <HStack mt={8} alignItems="start">
        <Card.Root>
          <Card.Header>
            <Card.Title >Atividades Recentes</Card.Title>
          </Card.Header>

          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon = iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <CardBase
                key={activity.id}
                colorPalette="blue"
                icon={ActivityIcon}
                title={activity.title}
                time={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>


        <Card.Root>
          <Card.Header>
            <Card.Title >Últimos Eventos</Card.Title>
          </Card.Header>

          <Card.Body gap={10}>
            {upcomingEvents.map((event) => {
              const EventIcon = iconMap[event.type] ?? AiFillQuestionCircle;
              return (
                <CardBase
                key={event.id}
                colorPalette={event.color as ColorPalette}
                icon={EventIcon}
                title={event.title}
                time={event.dateTime}
                />
              );
            })}

          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
