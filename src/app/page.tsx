import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PuppyCard from "@/components/PuppyCard";
import { puppies } from "@/data/puppies";

const heroImages = [
  "/images/rolezeira.jpg",
  "/images/normal.jpg",
  "/images/gestante.jpg",
];

export default function Home() {
  const heroImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  return (
    <div className="flex flex-col min-h-screen bg-dark-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-dark-900">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #9333ea 0, #9333ea 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-gold/40 px-4 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-jakarta text-xs text-gold uppercase tracking-widest">Nova Invocação</span>
            </div>

            <h1 className="galaxy-text font-crimson text-6xl md:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tight">
              7 herdeiros de <br />Donatella
            </h1>

            <p className="font-vietnam text-lg text-stone-300 leading-relaxed max-w-md">
              Conheça os 7 herdeiros de Donatella. Cachorrinhos de puro amor prontos para fazer parte de sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="#gallery"
                className="font-jakarta font-bold text-sm bg-gold text-white px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors text-center"
              >
                Ver Filhotes
              </Link>
              <Link
                href="#story"
                className="font-jakarta font-bold text-sm border border-gold/40 text-gold px-8 py-3.5 rounded-full hover:border-gold hover:bg-gold/10 transition-colors text-center"
              >
                A Donatella
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/40 shadow-[0_0_60px_rgba(147,51,234,0.2)]">
              <Image
                src={heroImage}
                alt="Donatella"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              {/* Stat badge */}
              {/* <div className="absolute bottom-4 left-4 right-4 bg-dark-900/80 backdrop-blur border border-gold/30 rounded-lg px-4 py-3"> */}
                {/* <div className="flex items-center justify-between">
                  <div>
                    <p className="font-crimson text-gold font-black text-lg uppercase">Donatella</p>
                    <p className="font-vietnam text-xs text-stone-400">A portadora do tesouro</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-card text-xs text-cream">ATK/ ∞</p>
                    <p className="font-mono-card text-xs text-cream">DEF/ 9999</p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-dark-800 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + badge */}
          <div className="relative">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-gold/20 shadow-2xl max-w-md">
              <Image
                src="/images/donatella-rescue.jpg"
                alt="Donatella resgatada"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-dark-900 border-2 border-gold rounded-xl px-6 py-4 shadow-xl">
              <div className="flex flex-col items-center">
                <span className="font-crimson text-5xl font-black text-gold">07</span>
                <span className="font-jakarta text-xs text-stone-400 uppercase tracking-widest">Vidas Geradas</span>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-crimson text-5xl font-black text-cream leading-tight uppercase">
              DAS RUAS<br />
              <span className="galaxy-text">AO ESTRELATO</span>
            </h2>

            <p className="font-vietnam text-base text-stone-300 leading-relaxed">
              Donatella foi adotada no começo de Março, sempre muito educada e carinhosa com todas, no entanto, ela carregava consigo um grande segredo!
            </p>

            <p className="font-vietnam text-base text-stone-300 leading-relaxed">
              Ela estava grávida de 7 filhotinhos, o segredo não pode ser mantido por muito tempo, a desconfiança surgiu na primeira consulta com o veterinário. 
              Duas semanas após a adoção, a barriguinha já entregava o que viria a ser o maior segredo de Donatella!
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                </svg>
              </div>
              <span className="font-vietnam text-sm text-gold font-semibold">"Educarei meus filhotes para que eles sejam pets comportados" Garante Donatella</span>
            </div>
          </div>
        </div>
      </section>

      {/* Puppy Gallery Section */}
      <section id="gallery" className="bg-dark-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-crimson text-5xl font-black text-cream uppercase">Filhotes</h2>
              <p className="font-vietnam text-base text-stone-400 mt-2">Escolha a sua nova compania diário.</p>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2">
              {["Todos", "Guerreiros", "Mágicos", "Pipoca"].map((tab, i) => (
                <button
                  key={tab}
                  className={`font-jakarta text-xs px-4 py-2 rounded-full border transition-colors ${
                    i === 0
                      ? "bg-gold text-white border-gold font-bold"
                      : "border-dark-500 text-stone-400 hover:border-gold/40 hover:text-stone-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {puppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
