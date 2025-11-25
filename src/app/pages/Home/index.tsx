import { coffeeProducts } from '@/__mock__/products'
import { CardCoffee } from '@/features/home/components/cardCoffee'
import { HomeBanner } from '@/features/home/components/homeBanner'
import { Heading } from '@/shared/components/Heading'

export default function Home() {
  return (
    <div>
      <HomeBanner />

      <div className="container-center mt-10 md:mt-20">
        <Heading level="h3" as="h3" weight="bold" className="font-baloo">
          Nossos Cafés
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 pt-12 place-items-center">
          {coffeeProducts.map((product) => (
            <CardCoffee key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
