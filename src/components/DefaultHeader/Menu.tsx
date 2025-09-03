import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { NavigationItem } from "./NavigationItem";
import { IoMdPeople } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { AiFillFileText } from "react-icons/ai";
import { IoCalendar } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/router";
import { signOut } from "@/contexts/SessionContext";

export function Menu() {
  const router = useRouter();
  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoMdMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Henrique Dos Santos Junkes</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                  defaultChecked={router.asPath === '/'}
                />

                <NavigationItem
                  icon={<IoMdPeople />}
                  label="Estudantes"
                  onClick={() => router.push("/students")}
                  defaultChecked={router.asPath === '/students'}
                />

                <NavigationItem
                  icon={<FaGraduationCap />}
                  label="Professores"
                  onClick={() => router.push("/teachers")}
                  defaultChecked={router.asPath === '/teachers'}
                />

                <NavigationItem
                  icon={<FaBookOpen />}
                  label="Cursos"
                  onClick={() => router.push("/courses")}
                  defaultChecked={router.asPath === '/courses'}
                />

                <NavigationItem
                  icon={<AiFillFileText />}
                  label="Notas"
                  onClick={() => router.push("/grades")}
                  defaultChecked={router.asPath === '/grades'}
                />

                <NavigationItem
                  icon={<FaUserPlus />}
                  label="Matrículas"
                  onClick={() => router.push("/enrollment")}
                  defaultChecked={router.asPath === '/enrollment'}
                />

                <NavigationItem
                  icon={<IoCalendar />}
                  label="Calendário"
                  onClick={() => router.push("/calendar")}
                  defaultChecked={router.asPath === '/calendar'}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem
                icon={<IoLogOut />}
                label="Sair"
                onClick={signOut}
              />
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
