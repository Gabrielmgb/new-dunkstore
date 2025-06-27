"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { cartItems } from "@/lib/data"
import { Trash2, X, Plus, Minus } from "lucide-react"

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-[#1A1A1A] text-white border-l-gray-800 w-full sm:max-w-md flex flex-col">
        <SheetHeader className="p-6 border-b border-gray-800">
          <SheetTitle className="flex justify-between items-center">
            <span className="text-xl font-bold">Carrinho ({cartItems.length})</span>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Trash2 className="h-5 w-5" />
              <span className="sr-only">Limpar carrinho</span>
            </Button>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md bg-gray-700"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-400">Tamanho: {item.size} | Cor: Preto/Branco</p>
                  <p className="font-bold text-orange-500 mt-1">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                  <X className="h-4 w-4" />
                </Button>
                <div className="flex items-center border border-gray-700 rounded-md">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-2 text-sm">{item.quantity}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-bold text-sm mt-1">R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</p>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="p-6 border-t border-gray-800 bg-[#1A1A1A]">
          <div className="w-full space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>
            <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-14">
              FINALIZAR COMPRA
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
