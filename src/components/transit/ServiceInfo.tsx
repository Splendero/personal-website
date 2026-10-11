interface ServiceInfoProps {
  title: string;
  stats: { value: string; label: string }[];
}

export const ServiceInfo = ({ title, stats }: ServiceInfoProps) => (
  <section aria-label={title} className="overflow-hidden rounded-xl border border-foreground/15 bg-card">
    <h2 className="bg-sign px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-sign-foreground">
      {title}
    </h2>
    <dl className="grid grid-cols-2 gap-px bg-foreground/10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse bg-card px-5 py-4">
          <dt className="text-sm text-muted-foreground">{stat.label}</dt>
          <dd className="font-mono text-3xl font-bold">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);
