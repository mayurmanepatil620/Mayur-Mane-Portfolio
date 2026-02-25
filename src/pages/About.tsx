import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { about } from "@/components/portfolio/portfolioData";

export default function AboutPage() {
  return (
    <PortfolioLayout>
      <section className="container py-14">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
          <p className="mt-4 text-muted-foreground">{about.lead}</p>
        </header>

        <div className="mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">{about.title}</h2>
          <p className="mt-3 text-muted-foreground">{about.body}</p>
        </div>
      </section>
    </PortfolioLayout>
  );
}
