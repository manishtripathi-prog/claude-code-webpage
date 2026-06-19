import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { offers } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we can work together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three ways to bring AI strategy and execution into your product,
            depending on how much hands-on support you need.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.title}
                className="group relative border border-white/10 bg-card p-2 transition-colors hover:border-primary/50"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-primary/10" />
                <CardHeader>
                  <Icon className="size-8 text-blue-400" />
                  <CardTitle className="mt-3 text-lg">{offer.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={offer.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:underline"
                  >
                    Learn more <ArrowRight className="size-3.5" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
