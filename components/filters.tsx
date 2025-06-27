"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

const SIZES = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
const COLORS = ["Preto", "Branco", "Vermelho", "Azul", "Rosa"]
const GENDERS = ["Masculino", "Feminino", "Unissex"]

interface FiltersProps {
  priceRange: [number, number]
  onPriceChange: (value: [number, number]) => void
  selectedGenders: string[]
  onGenderChange: (gender: string) => void
  selectedSizes: string[]
  onSizeChange: (size: string) => void
  selectedColors: string[]
  onColorChange: (color: string) => void
  onClearFilters: () => void
}

export function Filters({
  priceRange,
  onPriceChange,
  selectedGenders,
  onGenderChange,
  selectedSizes,
  onSizeChange,
  selectedColors,
  onColorChange,
  onClearFilters,
}: FiltersProps) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-orange-500" />
        FILTROS
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-3">PREÇO</h3>
          <Slider
            value={priceRange}
            onValueChange={onPriceChange}
            max={4000}
            step={50}
            className="[&>span:first-child]:h-1"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">GÊNERO</h3>
          <div className="space-y-2">
            {GENDERS.map((gender) => (
              <div key={gender} className="flex items-center space-x-2">
                <Checkbox
                  id={gender.toLowerCase()}
                  checked={selectedGenders.includes(gender)}
                  onCheckedChange={() => onGenderChange(gender)}
                  className="border-gray-600 data-[state=checked]:bg-orange-500"
                />
                <label htmlFor={gender.toLowerCase()} className="text-sm cursor-pointer">
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">TAMANHO</h3>
          <div className="grid grid-cols-4 gap-2">
            {SIZES.map((size) => (
              <Button
                key={size}
                variant={selectedSizes.includes(size) ? "default" : "outline"}
                onClick={() => onSizeChange(size)}
                className={
                  selectedSizes.includes(size)
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-transparent border-gray-600 hover:bg-gray-700 hover:text-white"
                }
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">COR</h3>
          <div className="space-y-2">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`block text-sm text-left w-full ${
                  selectedColors.includes(color) ? "text-white font-semibold" : "text-gray-400"
                } hover:text-white`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        onClick={onClearFilters}
        className="w-full mt-8 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      >
        LIMPAR FILTROS
      </Button>
    </div>
  )
}
