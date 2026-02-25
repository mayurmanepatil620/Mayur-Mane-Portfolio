import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { skills } from "@/components/portfolio/portfolioData";

function Bar({ name, percent }: { name: string; percent: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{percent}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-secondary">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Circle({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
      <div
        className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-primary"
        aria-label={`${name} ${percent} percent`}
      >
        <span className="text-sm font-semibold text-foreground">{percent}%</span>
      </div>
      <p className="mt-3 text-sm font-medium text-foreground">{name}</p>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <PortfolioLayout>
      <section className="container py-14">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">My Skills</h1>
          <p className="mt-4 text-muted-foreground">Technical expertise and professional competencies</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Programming Languages</h2>
            <div className="mt-6 grid gap-5">
              {skills.programming.map((s) => (
                <Bar key={s.name} name={s.name} percent={s.percent} />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Frameworks & Libraries</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.frameworks.map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-semibold">Analytics & Tools</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.analytics.map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.soft.map((s) => (
              <Circle key={s.name} name={s.name} percent={s.percent} />
            ))}
          </div>
        </section>
      </section>
    </PortfolioLayout>
  );
}
