import Link from "next/link";
import Image from "next/image";
import { Puppy } from "@/data/puppies";

interface PuppyCardProps {
  puppy: Puppy;
}

export default function PuppyCard({ puppy }: PuppyCardProps) {
  return (
    <Link href={`/puppy/${puppy.id}`} className="relative flex flex-col bg-dark-800 rounded-lg overflow-hidden border border-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-gold/60 transition-all duration-300 hover:-translate-y-1">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gold/30 bg-dark-900">
        <span className="font-crimson text-base font-black text-cream uppercase tracking-wide">{puppy.name}</span>
        {puppy.available ? (
          <span className="text-whatsapp">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </span>
        ) : (
          <span className="text-red">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
            </svg>
          </span>
        )}
      </div>

      {/* Level hearts */}
      <div className="flex gap-1 px-4 pt-2">
        {Array.from({ length: puppy.level }).map((_, i) => (
          <svg key={i} className="w-3 h-3 text-red fill-red" viewBox="0 0 24 24">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
        ))}
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden mx-3 mt-2 rounded border border-gold/20">
        <Image
          src={puppy.imageUrl}
          alt={puppy.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
      </div>

      {/* Type tag */}
      <div className="px-4 pt-2 pb-1">
        <span className="font-mono-card text-xs text-stone-400">[ {puppy.type} ]</span>
      </div>

      {/* Description */}
      <div className="px-4 pb-2 border-b border-gold/20">
        <p className="font-vietnam text-xs text-stone-300 leading-relaxed line-clamp-3">{puppy.description}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-between px-4 py-2">
        <span className="font-mono-card text-xs text-cream">ATK/ {puppy.atk}</span>
        <span className="font-mono-card text-xs text-cream">DEF/ {puppy.def}</span>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <span className="block w-full text-center font-jakarta text-sm font-bold text-white bg-gold hover:bg-gold-light transition-colors py-2 rounded">
          Invocar Detalhes
        </span>
      </div>
    </Link>
  );
}
