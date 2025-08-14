import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import BarberShopItem from "./_components/barbershop-item"
import { db } from "@/app/_lib/prisma"


//todo components são server components
const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Marcelo</h2>
        <p> Terça-Feira, 12 de Agosto </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquisar..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="banner"
            src="/BannerPizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/* AGENDAMENTOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* DIV ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>

              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm"> Barbearia Shop</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm"> Agosto</p>
              <p className="text-2xl">12 </p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* RECOMENDADOS */}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      {barbershops.map((barbershop) => (
        <BarberShopItem key={barbershop.id} barbershop={barbershop} />
      ))}
    </div>
  )
}

export default Home