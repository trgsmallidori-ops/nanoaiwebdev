import type { Metadata } from "next";
import FaqClient, { type FaqItem } from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about pricing, timelines, revisions, and what to expect when working with Spaxio on luxury-inspired websites."
};

const faqs: FaqItem[] = [
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the size and scope of the website, the number of pages, and any special features or automations you need."
  },
  {
    question: "How long does a typical website take?",
    answer:
      "Most projects are ready within a week, depending on size, complexity, and how quickly content and feedback are shared."
  },
  {
    question: "Do I get a free mock website?",
    answer:
      "Yes. You get a clickable mock first so we can align on the look and structure before any build costs start."
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Your goals, preferred style references, a rough sitemap, and any existing brand assets like logos or colors."
  },
  {
    question: "Can you handle copy and visuals?",
    answer:
      "Yes. I can draft conversion-focused copy and source premium visuals, or work with your existing assets."
  },
  {
    question: "What platforms do you build on?",
    answer:
      "I build with Next.js and deploy on Vercel for fast performance, stability, and easy hosting."
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Revisions are included during the design and build sprint to refine layout, typography, and content."
  },
  {
    question: "Can you add forms and automations?",
    answer:
      "Absolutely. I can connect forms to email, CRM, or scheduling tools so leads flow smoothly."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function FaqPage() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqClient faqs={faqs} />
    </main>
  );
}
