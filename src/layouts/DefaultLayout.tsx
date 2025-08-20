import { Button, Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoIosMenu, IoMdHelpCircle,  IoMdMoon,  IoMdNotifications, IoMdSettings, IoMdSunny } from "react-icons/io";
import { Avatar } from "@/components/ui/avatar";
import logoPreto from "../../public/assets/logo-preta-cesul.png";
import logoBranco from "../../public/assets/logo-branca-cesul.png";
import { useColorMode } from "@/components/ui/color-mode";
import { DefaultHeader } from "@/components/DefaultHeader";


type DefaultLayoutProps = {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex flexDir="column" >
      <DefaultHeader />

      {children}
    </Flex>
  );
}
