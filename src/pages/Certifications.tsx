import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { certifications } from "@/components/portfolio/portfolioData";

export default function CertificationsPage() {
  return (
    <PortfolioLayout>
      <section className="container py-14">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">Certifications</h1>
          <p className="mt-4 text-muted-foreground">Professional certifications and achievements</p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {c.year}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}
