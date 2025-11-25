import { MapPin } from 'lucide-react'

import { CartButton } from '@/shared/components/CartButton'
import { Button } from '@/shared/components/ui/button'

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1020px] mx-auto flex items-center justify-between py-4 gap-4">
        <picture>
          <img src="/icons/logo.svg" alt="logo" />
        </picture>

        <div className="flex items-center gap-4">
          {/* TODO: integrar com o google maps */}
          <Button className="bg-muted-foreground hover:bg-secondary/40">
            <MapPin className="text-secondary-foreground" strokeWidth={3}/>
            <span className="hidden sm:inline-block text-secondary-foreground">Loc</span>
          </Button>
          <CartButton color="yellow" onClickCart={() => void 0} />
        </div>
      </div>
    </header>
  )
}
