import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-cream py-12 md:py-16 lg:py-24 border-b border-sand/30">
          <div className="max-w-[700px] mx-auto px-5 md:px-8 text-center space-y-4">
            <span className="text-[0.625rem] uppercase tracking-[0.14em] font-semibold text-olive">
              Our Story
            </span>
            <h1 className="font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-[-0.02em] uppercase text-walnut">
              Statement Redefined.
            </h1>
            <p className="text-[0.9375rem] lg:text-[1.0625rem] leading-[1.7] text-deep/60 max-w-lg mx-auto">
              House of Melone was founded on a singular conviction: that
              traditional Pakistani silhouettes possess an innate, sculptural
              elegance that deserves to sit seamlessly alongside the finest
              international tailoring.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full bg-cream py-12 md:py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.625rem] tracking-[-0.02em] uppercase text-walnut">
                    Timeless Fashion
                  </h2>
                  <p className="text-[0.875rem] leading-[1.7] text-deep/60">
                    We believe clothing should outlast trends. Every piece in our
                    collection is designed with classic silhouettes, refined
                    details, and an understated sophistication that transcends
                    seasonal fashion.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.625rem] tracking-[-0.02em] uppercase text-walnut">
                    Natural Fabrics
                  </h2>
                  <p className="text-[0.875rem] leading-[1.7] text-deep/60">
                    From Italian Wash &amp; Wear to premium Irish linen, we
                    source fabrics that breathe, age beautifully, and feel
                    exceptional against the skin. Natural materials are at the
                    heart of everything we create.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-[1.375rem] md:text-[1.625rem] tracking-[-0.02em] uppercase text-walnut">
                    Heritage Craftsmanship
                  </h2>
                  <p className="text-[0.875rem] leading-[1.7] text-deep/60">
                    Our Charsadda Chappals are handcrafted by master cobblers in
                    Khyber Pakhtunkhwa, carrying forward four generations of
                    leather-working tradition. Each pair is shaped individually,
                    honoring the artisanal integrity of the original craft.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB82Icm3J5lAWE4e3GFJgwaJ0G8v2VBP9nW6PjrTruo1pPcJ8rJTEtPHuFQRIVq78PM5nTbdBFliPzywhmhN4QJLcdaPyEKqxYtfC3kxmaFv8uIY27W9yinHSvaHmiGZMaVxb1vwg9zbvH_KSiyzWb2rzVJiHj_JxCzzZ3D10sJlocdL_eQ1Ebtjv-GPZCEznHTMviOZO0neWgt-nPXcRrWrIt7RSI6C_WPLY0iNozbsvvIQvEtatvM"
                    alt="House of Melone — Editorial"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-walnut text-cream p-6 lg:p-8">
                  <blockquote className="font-serif text-[1.125rem] italic leading-snug">
                    &ldquo;We discard excess ornamentation in favor of obsessive
                    pattern drafting and premium natural fabrics.&rdquo;
                  </blockquote>
                  <span className="text-[0.625rem] uppercase tracking-[0.14em] text-cream/45 mt-3 block">
                    House of Melone
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-5 pt-2">
                  <div>
                    <span className="font-serif text-[1.375rem] font-medium text-walnut block">
                      4+
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.1em] text-olive">
                      Generations of Craft
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-[1.375rem] font-medium text-walnut block">
                      100%
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.1em] text-olive">
                      Natural Fabrics
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-[1.375rem] font-medium text-walnut block">
                      Karachi
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.1em] text-olive">
                      Based in Pakistan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
