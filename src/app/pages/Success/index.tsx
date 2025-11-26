import { Clock, DollarSign, MapPin } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Heading } from '@/shared/components/Heading'
import { Card, CardContent } from '@/shared/components/ui/card'
import { ShineBorder } from '@/shared/components/ui/shine-border'

type FormData = {
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const paymentMethodLabels = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  cash: 'Dinheiro'
}

export default function Success() {
  const location = useLocation()
  const formData = location.state as FormData | null

  const address = formData
    ? `${formData.rua}, ${formData.numero}${formData.complemento ? ` - ${formData.complemento}` : ''}\n${formData.bairro} - ${formData.cidade}, ${formData.uf}`
    : 'Rua aqui'

  const paymentMethod = formData ? paymentMethodLabels[formData.paymentMethod] : 'tipo do pagamento aqui'
  return (
    <div className="container-center w-full flex items-start gap-10 mt-10 md:mt-30">
      <div className="flex-1">
        <div>
          <Heading level="h3" as="h3" weight="bold" className="font-baloo text-primary-foreground">
            Uhu! Pedido confirmado
          </Heading>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <Card className="relative w-full rounded-tl-[5px] rounded-br-[5px] rounded-tr-3xl rounded-bl-3xl bg-transparent mt-8 shadow-none border-none">
          <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-secondary text-white">
                <MapPin />
              </div>

              <div>
                <p className="font-semibold">Entrega em:</p>
                <p className="whitespace-pre-line">{address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-primary text-white">
                <Clock />
              </div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-primary-foreground text-white">
                <DollarSign />
              </div>

              <p>Pagamento na entrega: {paymentMethod}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <picture className="hidden md:inline-block">
        <img src="/images/sucesse-banner.svg" alt="banner" />
      </picture>
    </div>
  )
}
