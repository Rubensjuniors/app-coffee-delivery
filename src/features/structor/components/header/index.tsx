import { MapPin } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { useCartContext } from '@/features/cart/context/useCartContext'
import { CartButton } from '@/shared/components/CartButton'
import { Button } from '@/shared/components/ui/button'

export function Header() {
  const navigate = useNavigate()
  const { selectedCoffee } = useCartContext()

  const count = selectedCoffee.length

  const handleClickCart = () => {
    if (count) {
      navigate('/checkout')
    }
  }

  return (
    <header className="w-full">
      <div className="max-w-[1020px] mx-auto flex items-center justify-between py-4 gap-4">
        <Link to="/">
          <img src="/icons/logo.svg" alt="logo" />
        </Link>

        <div className="flex items-center gap-4">
          {/* TODO: integrar com o google maps */}
          <Button className="bg-muted-foreground hover:bg-secondary/40">
            <MapPin className="text-secondary-foreground" strokeWidth={3} />
            <span className="hidden sm:inline-block text-secondary-foreground">Loc</span>
          </Button>
          <CartButton color="yellow" onClickCart={handleClickCart} count={count} />
        </div>
      </div>
    </header>
  )
}
