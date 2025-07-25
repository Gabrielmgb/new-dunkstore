"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Heart, ShoppingBag, User } from "lucide-react"
import { CartSidebar } from "./cart-sidebar"

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight">DUNK</span>
            <span className="text-2xl font-extrabold tracking-tight text-orange-500">STORE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              HOME
            </Link>
            <Link href="/loja" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              LOJA
            </Link>
            <Link href="/sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              SOBRE
            </Link>
            <Link href="/contato" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              CONTATO
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative items-center">
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Buscar Nike Dunk..."
                className="pl-10 pr-4 py-2 w-64 bg-[#2C2C2C] border-none text-white placeholder:text-gray-500 rounded-md"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative hover:bg-white/10">
                <Heart className="h-6 w-6 text-white" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  2
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-white/10"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-6 w-6 text-white" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  4
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <User className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
