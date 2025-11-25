import type { LucideIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  iconColor?: 'primary' | 'secondary' | 'gray'
}

export const FeatureCard = ({ icon: Icon, title, iconColor = 'primary' }: FeatureCardProps) => {
  const iconColors = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    gray: 'bg-gray-900/10 text-gray-500'
  }

  return (
    <div className="flex items-center gap-3">
      <div className={cn('p-2 rounded-full', iconColors[iconColor])}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-gray-500 text-xs">{title}</span>
    </div>
  )
}
