import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { Truck, ShieldCheck, Headset, ArrowRight } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Nike Dunk Low Retro White/Black",
    rating: 4.8,
    price: 899.99,
    originalPrice: 1199.99,
    image: "/new-dunkstore/nike-dunk-panda.jpg",
    tag: "PROMOÇÃO",
  },
  {
    id: 2,
    name: "Nike Dunk High Vintage Navy",
    rating: 4.9,
    price: 749.99,
    originalPrice: 999.99,
    image: "/nike-dunk-brown.jpg",
    tag: "LANÇAMENTO",
  },
  {
    id: 3,
    name: "Nike SB Street Pink",
    rating: 4.7,
    price: 1099.99,
    image: "/nike-dunk-grey.jpg",
    tag: "EXCLUSIVO",
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/new-dunkstore/hero-dunk.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center">
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter">DUNK</h1>
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-orange-500">STORE</h1>
            </div>
            <p className="mt-4 text-lg md:text-xl text-gray-300">Seu Nike Dunk está aqui.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6">
                EXPLORAR COLEÇÃO <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 bg-transparent"
              >
                NOSSA HISTÓRIA
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#1A1A1A] py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            <div className="flex flex-col items-center">
              <Truck className="h-10 w-10 text-orange-500" />
              <h3 className="mt-4 text-xl font-bold">FRETE GRÁTIS</h3>
              <p className="text-gray-400">Em compras acima de R$ 299</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-orange-500" />
              <h3 className="mt-4 text-xl font-bold">PRODUTO ORIGINAL</h3>
              <p className="text-gray-400">100% autenticidade garantida</p>
            </div>
            <div className="flex flex-col items-center">
              <Headset className="h-10 w-10 text-orange-500" />
              <h3 className="mt-4 text-xl font-bold">SUPORTE 24/7</h3>
              <p className="text-gray-400">Atendimento especializado</p>
            </div>
          </div>
        </section>

        {/* Weekly Highlights Section */}
        <section className="py-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              DESTAQUES DA <span className="text-orange-500">SEMANA</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">Os modelos mais desejados pelos sneakerheads</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              GALERIA <span className="text-orange-500">DUNK</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">Inspire-se com o estilo e a cultura dos sneakers.</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
              <div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Nike Dunk Gallery Image 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Nike Dunk Gallery Image 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Nike Dunk Gallery Image 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Nike Dunk Gallery Image 4"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Nike Dunk Gallery Image 5"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#1A1A1A] py-20">
          <div className="container mx-auto text-center px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              FIQUE POR <span className="text-orange-500">DENTRO</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Receba em primeira mão os lançamentos, promoções exclusivas e novidades do mundo sneaker
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow bg-[#2C2C2C] border-none text-white placeholder:text-gray-500 h-14 text-lg"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg h-14 px-8"
              >
                INSCREVER
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
