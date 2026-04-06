import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YuGiOhCard from "@/components/YuGiOhCard";
import ImageCarousel from "@/components/ImageCarousel";
import { puppies, donatella } from "@/data/puppies";

const allPuppies = [donatella, ...puppies];

export function generateStaticParams() {
  return allPuppies.map((p) => ({ id: p.id }));
}

export default async function PuppyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const puppy = allPuppies.find((p) => p.id === id);

  if (!puppy) notFound();

  const photoGallery = [puppy.imageUrl, puppy.imageUrl, puppy.imageUrl];

  return (
    <div className="flex flex-col min-h-screen bg-dark-800">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Card — first in DOM = left on desktop, top on mobile */}
          <div className="flex justify-center lg:justify-start lg:sticky lg:top-24">
            <YuGiOhCard puppy={puppy} />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-crimson text-5xl font-black text-cream uppercase leading-tight">
                {puppy.name}:{" "}
                <span className="galaxy-text">A Carta Lendária</span>
              </h1>
              <p className="font-vietnam text-base text-stone-300 mt-4 leading-relaxed max-w-lg">
                {puppy.longDescription}
              </p>
            </div>

            {/* Photo carousel */}
            <div>
              <p className="font-jakarta text-xs font-bold text-gold uppercase tracking-widest mb-4">
                Registro Visual
              </p>
              <ImageCarousel images={photoGallery} alt={puppy.name} />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-jakarta font-bold text-sm bg-whatsapp text-dark-900 px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.774-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.5-5.213-1.375l-.375-.219-3.875 1.016 1.031-3.766-.243-.391A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={`mailto:contato@donatellapups.com?subject=Interesse em adotar ${puppy.name}`}
                className="flex items-center justify-center gap-2 font-jakarta font-bold text-sm bg-red-dark text-cream px-8 py-3.5 rounded-full hover:bg-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-mail
              </a>
            </div>

            {/* Adoption contract note */}
            <div className="border border-gold/20 rounded-xl p-5 bg-dark-900/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-jakarta text-sm font-bold text-gold mb-1">Contrato de Invocação</p>
                  <p className="font-vietnam text-sm text-stone-400 leading-relaxed">
                    Ao adotar, você assina um termo de responsabilidade e se compromete com a castração e vacinação anual. Esta é uma invocação permanente para sua vida.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/#gallery"
              className="inline-flex items-center gap-2 font-jakarta text-sm text-stone-400 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Deck
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
