import { Section } from "@/components/ui/Section";
import {
  InfoList,
  InfoListItem,
} from "@/components/ui/InfoList";

export function Focus() {
  return (
    <div
      className="col-span-6"
      data-gsap="focus-section"
      data-depth="2"
    >
      <Section title="Current Focus">
        <InfoList>
          <InfoListItem>
            Backend Architecture
          </InfoListItem>

          <InfoListItem>
            API Design
          </InfoListItem>

          <InfoListItem>
            Developer Experience
          </InfoListItem>
        </InfoList>
      </Section>
    </div>
  );
}