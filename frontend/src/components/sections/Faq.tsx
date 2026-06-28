import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";
import { Reveal } from "@/components/shared/Reveal";
import { FAQS } from "@/constants/faqs";

const accordionItems: AccordionItemData[] = FAQS.map((faq) => ({
  id: faq.id,
  trigger: faq.question,
  content: faq.answer,
}));

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionHeading tag="Got Questions?" title="Frequently Asked" />
        <Reveal className="mx-auto mt-13 max-w-2xl">
          <Accordion items={accordionItems} defaultOpenId={FAQS[0]?.id} />
        </Reveal>
      </Container>
    </section>
  );
}
