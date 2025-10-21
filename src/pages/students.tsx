import { VStack } from "@chakra-ui/react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { api } from "@/service/apiClient";

type Student = {
  fullName: string,
  email: string,
  course: string,
  semester: string,
  status: string,
  enrollment: string,
}

export default function Students() {
const data: Student[] = [
  {
    fullName: "Ana Beatriz Silva",
    email: "ana.silva@example.com",
    course: "Engenharia de Software",
    semester: "5º",
    status: "Ativo",
    enrollment: "2021001"
  },
  {
    fullName: "Carlos Eduardo Santos",
    email: "carlos.santos@example.com",
    course: "Análise e Desenvolvimento de Sistemas",
    semester: "3º",
    status: "Ativo",
    enrollment: "2021023"
  },
  {
    fullName: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    course: "Ciência da Computação",
    semester: "7º",
    status: "Trancado",
    enrollment: "2020999"
  },
  {
    fullName: "João Pedro Oliveira",
    email: "joao.oliveira@example.com",
    course: "Sistemas de Informação",
    semester: "1º",
    status: "Ativo",
    enrollment: "2024008"
  },
  {
    fullName: "Mariana Costa",
    email: "mariana.costa@example.com",
    course: "Engenharia da Computação",
    semester: "9º",
    status: "Concluído",
    enrollment: "2018010"
  },
  {
    fullName: "Lucas Almeida",
    email: "lucas.almeida@example.com",
    course: "Gestão da Tecnologia da Informação",
    semester: "4º",
    status: "Ativo",
    enrollment: "2022032"
  },
  {
    fullName: "Patrícia Rocha",
    email: "patricia.rocha@example.com",
    course: "Engenharia de Software",
    semester: "6º",
    status: "Ativo",
    enrollment: "2021029"
  },
  {
    fullName: "Thiago Mendes",
    email: "thiago.mendes@example.com",
    course: "Ciência de Dados",
    semester: "2º",
    status: "Ativo",
    enrollment: "2024012"
  },
  {
    fullName: "Juliana Ferreira",
    email: "juliana.ferreira@example.com",
    course: "Sistemas de Informação",
    semester: "8º",
    status: "Formado",
    enrollment: "2019005"
  },
  {
    fullName: "Rafael Martins",
    email: "rafael.martins@example.com",
    course: "Engenharia de Computação",
    semester: "5º",
    status: "Ativo",
    enrollment: "2022007"
  }
];

  const columnHelper = createColumnHelper<Student>()

  const columns = [
    columnHelper.accessor("fullName", {
      header: "Estudante",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
       columnHelper.accessor("enrollment", {
      header: "Matricula",
      cell: (info) => info.getValue(),
    }),
  ]

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get('/students');

      setStudents(data.students);
    }

    load();
  }, [])

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="flex-start">
        <StudentsHeader />
        <Table data={data} columns={columns}/>
      </VStack>
    </DefaultLayout>
  );
}
