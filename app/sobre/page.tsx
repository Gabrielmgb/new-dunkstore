import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const stats = [
  { value: "50K+", label: "Clientes Satisfeitos" },
  { value: "500+", label: "Modelos Disponíveis" },
  { value: "99%", label: "Produtos Originais" },
  { value: "24h", label: "Suporte Ativo" },
]

export default function SobrePage() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Header />
      <main>
        <section className="relative py-24 md:py-32 bg-[#1A1A1A]">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              NOSSA HISTÓRIA
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">DUNK</h1>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-orange-500">STORE</h1>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
              Nascemos da paixão pelos tênis Nike Dunk e pela cultura streetwear. Somos mais que uma loja - somos uma
              comunidade que celebra o estilo, a autenticidade e a expressão individual através dos sneakers.
            </p>
          </div>
        </section>

        <section className="bg-[#0D0D0D]">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center -mt-12 relative z-20">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#1A1A1A] py-8 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-orange-500">{stat.value}</p>
                <p className="mt-2 text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">
                NOSSA <span className="text-orange-500">MISSÃO</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A Dunkstore foi criada em 2020 por um grupo de amigos apaixonados por sneakers e pela cultura que os
                rodeia. O que começou como um pequeno hobby de colecionar e revender modelos raros, rapidamente se
                transformou em um negócio com a missão de democratizar o acesso aos Dunks mais cobiçados do mercado.
                Nossa curadoria é feita por especialistas que vivem e respiram o universo sneaker, garantindo que apenas
                produtos 100% autênticos e de alta qualidade cheguem até você.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" fill className="object-cover" alt="Nossa Missão" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
