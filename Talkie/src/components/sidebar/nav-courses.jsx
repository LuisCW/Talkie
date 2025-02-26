"use client";

import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useContext } from "react";
import { CoursesContext } from "@/context/CoursesContext";
import {
  RiDrinks2Fill ,
  RiHeart3Fill,
  RiUser5Fill,
  RiBookReadLine,
  RiEarthFill,
} from "react-icons/ri";

const getIcon = (type) => {
  switch (type) {
    case "food":
      return <RiDrinks2Fill  className="text-fblue-700"/>;
    case "expretions":
      return <RiHeart3Fill className="text-fblue-700" />;
    case "people":
      return <RiUser5Fill className="text-fblue-700" />;
    case "languages":
      return <RiBookReadLine className="text-fblue-700" />;
    default:
      return <RiEarthFill className="text-fblue-700" />;
  }
};

export function NavProjects() {
  const { isMobile } = useSidebar();
  const courses = useContext(CoursesContext);

  const coursesData = Object.keys(courses).map((key) => courses[key]);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-lg">Mis lecciones</SidebarGroupLabel>
      <SidebarMenu>
        {coursesData[0].map((course, index) => (
          <Collapsible
            key={index}
            asChild
            defaultOpen={course.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={course.name}
                  className="text-base mt-2"
                >
                  {course.type && getIcon(course.type)}
                  <span className="text-base">{course.name}</span>
                  <ChevronRight className="ml-auto w-5 h-5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {course.lessons?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span className="text-base">{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
