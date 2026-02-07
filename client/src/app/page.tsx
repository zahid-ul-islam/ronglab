import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <section className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg sm:h-[400px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">Summer Sale</h1>
          <p className="mt-4 text-lg font-medium sm:text-2xl">
            Up to 50% off on all accessories
          </p>
          <Button size="lg" variant="secondary" className="mt-6">
            Shop Now
          </Button>
        </div>
      </section>

      <section id="trendy">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Trendy Collections
          </h2>
          <Link
            href="/category/trendy"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-square w-full bg-muted/50 object-cover transition-transform group-hover:scale-105" />
              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-medium">
                  Trendy Item {i + 1}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">$29.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="best-selling">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Best Selling</h2>
          <Link
            href="/best-sellers"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-square w-full bg-muted/50 object-cover transition-transform group-hover:scale-105" />
              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-medium">
                  Best Seller {i + 1}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">$49.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
