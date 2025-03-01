// import Image from "next/image";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Sidebar>
              <SidebarContent>
                <SidebarMenuButton>
                  <p>Home</p>
                </SidebarMenuButton>
              </SidebarContent>
            </Sidebar>
            <h1>FOOD</h1>
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
