import { Icons } from "@/components/Icons/Icons";
import RootLeftSidebar from "@/components/Navbar/RootLeftSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { dashboardNavItems } from "@/config/dashboard";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lazba Seller Center",
  description: "Sell your products on Lazba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <SidebarProvider>
          <RootLeftSidebar items={dashboardNavItems} logoHref="/" user={{}} />

          <SidebarInset>
            <header className="flex bg-background sticky z-50 top-0 h-14 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center justify-between md:justify-start w-full gap-2 px-4 md:px-0">
                {/* Left Section */}
                <div>
                  <Link
                    href="/"
                    aria-label="Home"
                    className="flex gap-1.5 items-center group md:hidden"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icons.logo className="size-5" />
                    </div>

                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="font-bold text-base">Lazba</span>
                    </div>
                  </Link>
                </div>

                {/* Right Section */}
                <div>
                  <SidebarTrigger />
                </div>
              </div>
            </header>

            <main className="px-2 md:px-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
