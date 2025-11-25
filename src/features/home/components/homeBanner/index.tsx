import { Coffee, Package, ShoppingBag, Zap } from 'lucide-react'

import { Heading } from '@/shared/components/Heading'
import { Text } from '@/shared/components/Text'

import { FeatureCard } from '../FeatureCard'

export function HomeBanner() {
  const features = [
    { icon: ShoppingBag, title: 'Compra simples e segura', iconColor: 'primary' as const },
    { icon: Package, title: 'Embalagem mantém o café intacto', iconColor: 'gray' as const },
    { icon: Zap, title: 'Entrega rápida e rastreada', iconColor: 'primary' as const },
    { icon: Coffee, title: 'O café chega fresquinho até você', iconColor: 'secondary' as const }
  ]

  return (
    <div className="relative overflow-hidden bg-background pt-10">
      <div className="flex gap-16 container-center">
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <Heading level="h1" as="h1" weight="bold" className="font-baloo">
              Encontre o café perfeito para qualquer hora do dia
            </Heading>
            <Text className="text-gray-500">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>

        <picture className="z-10 hidden md:inline-block">
          <img src="/images/coffee-banner.png" alt="banner" className="w-[700px] h-[300px]" />
        </picture>
      </div>
    </div>
  )
}
