import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="galaxy-text font-crimson font-black text-xl uppercase tracking-wide">
              Donatella&apos;s Deck
            </span>
            <p className="font-vietnam text-sm text-stone-400 leading-relaxed">
              Criados com amor e espírito de duelo. Transformando o destino através da adoção lendária.
            </p>
            <p className="font-vietnam text-xs text-stone-500">
              Belo Horizonte, Brasil / Dueling Realm
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu Principal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jakarta text-xs font-bold text-stone-400 uppercase tracking-widest">Menu Principal</h4>
            <div className="flex flex-col gap-2">
              {["A Saga", "Como Invocar", "Tributos", "Regras"].map((item) => (
                <Link key={item} href="#" className="font-vietnam text-sm text-stone-300 hover:text-cream transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jakarta text-xs font-bold text-stone-400 uppercase tracking-widest">Suporte</h4>
            <div className="flex flex-col gap-2">
              {["Política de Dados", "Termos de Duelo", "Contato"].map((item) => (
                <Link key={item} href="#" className="font-vietnam text-sm text-stone-300 hover:text-cream transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <p className="font-vietnam text-xs text-stone-500 mt-2">Suporte ao Duelista 24/7</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-600">
          <p className="font-vietnam text-xs text-stone-500 text-center">
            © 2024 Donatella&apos;s Pups. Criados com amor e espírito de duelo.
          </p>
        </div>
      </div>
    </footer>
  );
}
