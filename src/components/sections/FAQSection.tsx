import Link from "next/link";

const faqs = [
  {
    q: "Do you have Wi-Fi?",
    a: "Yes, we have free Wi-Fi throughout the café. Cafe 23 is a favourite spot for working and studying.",
  },
  {
    q: "Is Cafe 23 family-friendly?",
    a: "Absolutely. We welcome families and children. The space is relaxed and there&apos;s plenty of room.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "We have a range of plant-based milk options and try to accommodate most dietary needs. Please speak to a team member when you arrive and we&apos;ll do our best.",
  },
  {
    q: "Can I bring my laptop and work here?",
    a: "Of course, that&apos;s exactly what this space is for. There are plug sockets available and the atmosphere is calm enough to focus.",
  },
  {
    q: "Do you take card payments?",
    a: "Yes, we accept card and contactless payments.",
  },
  {
    q: "Do you host events?",
    a: "We&apos;re community-focused and occasionally host events. Follow us on social media for the latest updates.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-[#F7F2E9] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#608552] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#608552]" />
            Good to Know
            <span className="w-8 h-px bg-[#608552]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1C1C] leading-tight">
            Frequently asked.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-[#E4DDD1] overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <h3 className="font-semibold text-[#1C1C1C] text-base pr-4">{faq.q}</h3>
                <span className="w-6 h-6 rounded-full border border-[#E4DDD1] flex items-center justify-center flex-shrink-0 group-open:bg-[#608552] group-open:border-[#608552] transition-colors text-[#888] group-open:text-white text-sm font-bold">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p
                  className="text-[#5A5A5A] text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#5A5A5A] text-sm mb-4">
            Still have a question? We&apos;re friendly, just come in and ask.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#608552] hover:bg-[#4A6B3E] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
