"use client";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg">Menú</SidebarGroupLabel>
      <SidebarMenu className="mt-2 gap-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url} className="text-base flex items-center">
                <item.icon className="w-6 h-6 text-fblue-700" />
                <span className="ml-2 text-base">{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
