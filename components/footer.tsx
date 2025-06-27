import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">DUNK</span>
              <span className="text-2xl font-extrabold tracking-tight text-orange-500">STORE</span>
            </Link>
            <p className="mt-4 text-sm">
              Sua loja especializada em Nike Dunk. Autenticidade garantida, entrega rápida e atendimento especializado
              para sneakerheads.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">PRODUTOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Masculino
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Feminino
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Unissex
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lançamentos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Promoções
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">SUPORTE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Rastrear Pedido
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Guia de Tamanhos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">EMPRESA</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Imprensa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">CONTATO</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-orange-500" />
                <span>
                  Rua das Sneakers, 123
                  <br />
                  Vila Madalena, São Paulo - SP
                  <br />
                  CEP: 05435-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>gabrielmgb.md@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Dunkstore. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-white">
              Política de Cookies
            </Link>
            <Link href="#" className="hover:text-white">
              Autenticidade
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Formas de pagamento:</span>
            {/* Placeholder for payment icons */}
            <div className="h-6 w-8 bg-gray-600 rounded-sm"></div>
            <div className="h-6 w-8 bg-gray-600 rounded-sm"></div>
            <div className="h-6 w-8 bg-gray-600 rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
