import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { experiences } from "@/components/portfolio/portfolioData";

export default function ExperiencePage() {
  return (
    <PortfolioLayout>
      <section className="container py-14">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">Experience</h1>
          <p className="mt-4 text-muted-foreground">My professional journey and internships</p>
        </header>

        <div className="mt-10 grid gap-6">
          {experiences.map((exp) => (
            <article key={exp.role + exp.date} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">{exp.date}</p>
              <h2 className="mt-2 text-xl font-semibold">{exp.role}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
              <p className="mt-4 text-muted-foreground">{exp.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}
