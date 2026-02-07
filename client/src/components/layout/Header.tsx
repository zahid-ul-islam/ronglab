"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, CircleUser, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"; // Added SheetTitle/Description to avoid warnings
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation menu for mobile
          </SheetDescription>
          <div className="flex h-14 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">RongLab</span>
            </Link>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <nav className="grid gap-2 p-4 text-sm font-medium">
              {NAVIGATION_ITEMS.map((item, index) =>
                item.subItems && item.subItems.length > 0 ? (
                  <Accordion
                    key={index}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value={item.title} className="border-none">
                      <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:no-underline">
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-9 pb-0 pt-1">
                        {item.subItems.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50",
                              pathname === sub.href && "text-primary bg-muted",
                            )}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted",
                      pathname === item.href && "text-primary bg-muted",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ),
              )}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <div className="relative w-full flex-1 md:w-2/3 lg:w-1/3">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingBag className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
      </div>
    </header>
  );
}
