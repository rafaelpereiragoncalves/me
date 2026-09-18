import { Section } from "@/components/ui/Section";

export function Stack() {
  return (
    <div
      className="col-span-6"
      data-gsap="stack-section"
      data-depth="2"
    >
      <Section title="Stack">
        <div className="space-y-2 text-sm leading-relaxed">
          <p>
            <span className="font-medium text-text-primary">Kotlin</span>
            <span className="text-text-muted"> · </span>

            <span className="font-medium text-text-primary">Spring Boot</span>
            <span className="text-text-muted"> · </span>

            <span className="text-text-secondary">React</span>
          </p>

          <p>
            <span className="text-text-secondary">Docker</span>
            <span className="text-text-muted"> · </span>

            <span className="text-text-secondary">PostgreSQL</span>
            <span className="text-text-muted"> · </span>

            <span className="text-text-secondary">AWS</span>
          </p>
        </div>
      </Section>
    </div>
  );
}
