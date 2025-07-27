import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            ENTRE EM <span className="text-orange-500">CONTATO</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Tem alguma dúvida ou sugestão? Adoraríamos ouvir você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-[#1A1A1A] p-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-6">Mande uma mensagem</h2>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome"
                className="bg-[#2C2C2C] border-none h-12"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-[#2C2C2C] border-none h-12"
              />
              <Textarea
                placeholder="Sua mensagem"
                className="bg-[#2C2C2C] border-none"
                rows={6}
              />
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12"
              >
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Nossas informações</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-orange-500 flex-shrink-0" />
                <span>
                  <span className="font-bold text-white">Endereço</span>
                  <br />
                  Rua das Sneakers, 123, Vila Madalena, São Paulo - SP, CEP:
                  05435-000
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-orange-500 flex-shrink-0" />
                <span>
                  <span className="font-bold text-white">Telefone</span>
                  <br />
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 text-orange-500 flex-shrink-0" />
                <span>
                  <span className="font-bold text-white">E-mail</span>
                  <br />
                  contato@dunkstore.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
