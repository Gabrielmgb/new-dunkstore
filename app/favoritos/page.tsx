import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { favoriteProducts } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { List, LayoutGrid, Trash2, ShoppingCart } from "lucide-react"

export default function FavoritosPage() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              MEUS <span className="text-orange-500">FAVORITOS</span>
            </h1>
            <p className="mt-2 text-gray-400">3 produtos favoritados</p>
          </div>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 bg-transparent border-gray-600 hover:border-red-500 hover:text-red-500"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Limpar Tudo
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Select defaultValue="recentes">
              <SelectTrigger className="w-[180px] bg-[#1A1A1A] border-gray-700">
                <SelectValue placeholder="Mais recentes" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] text-white border-gray-700">
                <SelectItem value="recentes">Mais recentes</SelectItem>
                <SelectItem value="antigos">Mais antigos</SelectItem>
              </SelectContent>
            </Select>
            <div className="hidden sm:flex items-center bg-[#1A1A1A] rounded-md">
              <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500">
                <LayoutGrid className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-orange-500 hover:text-white">
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 bg-[#1A1A1A] p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6">AÇÕES RÁPIDAS</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
            >
              CONTINUAR COMPRANDO
            </Button>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <ShoppingCart className="mr-2 h-5 w-5" />
              ADICIONAR TODOS AO CARRINHO
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
