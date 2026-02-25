import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";

export default function HomeRedirect() {
  return (
    <PortfolioLayout>
      <section className="container py-14">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="mt-3 text-muted-foreground">Use the navigation to explore the portfolio.</p>
      </section>
    </PortfolioLayout>
  );
}
