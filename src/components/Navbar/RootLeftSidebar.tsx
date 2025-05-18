import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { IconKey, Icons } from "../Icons/Icons";
import Logo from "../Shared/Logo";

const RootLeftSidebar = async ({ items }: any) => {
  const user = true;
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu defaultChecked={true}>
            {items.navMain.map((item: any) => {
              const Icon = item.icon
                ? Icons[item.icon as IconKey]
                : Icons.arrowRight;

              return (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {Icon && <Icon className="h-5 w-5" />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem: any) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {user?.data && user?.data?.role === "USER" && (
          <Link href="/collection" className="hover:bg-accent rounded-md">
            <SidebarMenuButton
              tooltip="My Collections"
              className="flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <Icons.star className="h-4 w-4" />
                <span>Collections</span>
              </span>
              <Icons.arrowRight />
            </SidebarMenuButton>
          </Link>
        )}

        {/* <SidebarMenu>
          {user?.data ? (
            <SidebarMenuItem>
              <UserAccountNav user={user?.data} />
            </SidebarMenuItem>
          ) : (
            <Link href="/auth/sign-in" className={cn(buttonVariants())}>
              Login
            </Link>
          )}
        </SidebarMenu> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default RootLeftSidebar;
