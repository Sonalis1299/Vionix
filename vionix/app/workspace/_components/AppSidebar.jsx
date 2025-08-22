"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { title } from "process";
import { LayoutDashboard, Settings2Icon, Video, Videotape, WalletCards } from "lucide-react";
import path from "path";
import { usePathname } from "next/navigation";

const MenuOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "Create Short Video",
    icon: Video,
    path: "/workspace/projects",
  },
  {
    title: "My Videos",
    icon: Videotape,
    path: "/workspace/my-videos",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/workspace/billing",
  },
  {
    title: "Settings",
    icon: Settings2Icon,
    path: "/workspace/settings",
  }
]

function AppSidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader className="flex ml-2">
        <Image src={'/logo.svg'} alt="logo" width={200} height={200}/>
      </SidebarHeader>
      <hr/>
      <SidebarContent>
        <SidebarGroup>
          <Button className={'mt-5'}>+ Create New Short Video</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuOptions.map((menu,index)=>(
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={'p-5'}>
                     <a href={menu.title} className={`text-[17px] ${path === menu.path&& 'text-primary bg-purple-100'}`}>
                      <menu.icon className="h-10 w-10"/>
                      <span>{menu.title}</span>
                     </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
