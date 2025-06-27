"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Filters } from "@/components/filters"
import { products as allProducts } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { List, LayoutGrid } from "lucide-react"

export default function LojaPage() {
  const [sortOption, setSortOption] = useState("relevancia")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4000])
  const [selectedGenders, setSelectedGenders] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const handleGenderChange = (gender: string) => {
    setSelectedGenders((prev) => (prev.includes(gender) ? prev.filter((g) => g !== gender) : [...prev, gender]))
  }

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const handleClearFilters = () => {
    setPriceRange([0, 4000])
    setSelectedGenders([])
    setSelectedSizes([])
    setSelectedColors([])
  }

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = allProducts
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) => selectedGenders.length === 0 || selectedGenders.includes(p.category))
      .filter((p) => selectedSizes.length === 0 || selectedSizes.some((size) => p.sizes.includes(size)))
      .filter((p) => selectedColors.length === 0 || selectedColors.some((color) => p.colors.includes(color)))

    switch (sortOption) {
      case "preco-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "preco-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "relevancia":
      default:
        filtered.sort((a, b) => a.id - b.id)
        break
    }
    return filtered
  }, [priceRange, selectedGenders, selectedSizes, selectedColors, sortOption])

  return (
    <div className="bg-[#0D0D0D] text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            NOSSA <span className="text-orange-500">COLEÇÃO</span>
          </h1>
          <p className="mt-2 text-lg text-gray-400">Descubra os melhores Nike Dunk para seu estilo.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-1/4">
            <Filters
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedGenders={selectedGenders}
              onGenderChange={handleGenderChange}
              selectedSizes={selectedSizes}
              onSizeChange={handleSizeChange}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          <section className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-gray-400 mb-4 sm:mb-0">{filteredAndSortedProducts.length} produtos encontrados</p>
              <div className="flex items-center gap-4">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px] bg-[#1A1A1A] border-gray-700">
                    <SelectValue placeholder="Relevância" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] text-white border-gray-700">
                    <SelectItem value="relevancia">Relevância</SelectItem>
                    <SelectItem value="preco-asc">Preço: Menor para Maior</SelectItem>
                    <SelectItem value="preco-desc">Preço: Maior para Menor</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center bg-[#1A1A1A] rounded-md">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500">
                    <LayoutGrid className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-orange-500 hover:text-white">
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
