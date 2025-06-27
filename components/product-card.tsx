import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"
import type { FC } from "react"

interface Product {
  id: number
  name: string
  rating: number
  price: number
  originalPrice?: number
  image: string
  tag?: string
}

interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden group text-left">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover aspect-square"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.tag}
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/30 hover:bg-orange-500 text-white rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span>{product.rating}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-white truncate">{product.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-2xl font-bold text-white">R$ {product.price.toFixed(2).replace(".", ",")}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </p>
          )}
        </div>
        <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold">VER DETALHES</Button>
      </div>
    </div>
  )
}
