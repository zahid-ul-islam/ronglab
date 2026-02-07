"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { Package2 } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">RongLab</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
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
                  <AccordionTrigger
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:no-underline",
                      // Highlight if path starts with item href (assuming hierarchy) or exact match
                      // pathname.startsWith(item.href) && "text-primary bg-muted"
                    )}
                  >
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
                          "block rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50",
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
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
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
    </aside>
  );
}
