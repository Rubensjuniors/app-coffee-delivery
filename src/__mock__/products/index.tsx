import type { ICoffee } from '@/shared/types/coffee'

export const coffeeProducts: ICoffee[] = [
  {
    id: 'coffee-1',
    image: '/images/coffee/coffee-1.png',
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.95,
    coffeeLimit: 1
  },
  {
    id: 'coffee-2',
    image: '/images/coffee/coffee-2.png',
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 10.30,
    coffeeLimit: 2
  },
  {
    id: 'coffee-3',
    image: '/images/coffee/coffee-3.png',
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.70,
    coffeeLimit: 1
  },
  {
    id: 'coffee-4',
    image: '/images/coffee/coffee-4.png',
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 11.10,
    coffeeLimit: 2
  },
  {
    id: 'coffee-5',
    image: '/images/coffee/coffee-5.png',
    tags: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 11.50,
    coffeeLimit: 1
  },
  {
    id: 'coffee-6',
    image: '/images/coffee/coffee-6.png',
    tags: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 11.90,
    coffeeLimit: 2
  },
  {
    id: 'coffee-7',
    image: '/images/coffee/coffee-7.png',
    tags: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12.30,
    coffeeLimit: 1
  },
  {
    id: 'coffee-8',
    image: '/images/coffee/coffee-8.png',
    tags: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 12.70,
    coffeeLimit: 2
  },
  {
    id: 'coffee-9',
    image: '/images/coffee/coffee-9.png',
    tags: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 13.10,
    coffeeLimit: 1
  },
  {
    id: 'coffee-10',
    image: '/images/coffee/coffee-10.png',
    tags: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 16.90,
    coffeeLimit: 2
  },
  {
    id: 'coffee-11',
    image: '/images/coffee/coffee-11.png',
    tags: ['Especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 18.90,
    coffeeLimit: 1
  },
  {
    id: 'coffee-12',
    image: '/images/coffee/coffee-12.png',
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 17.50,
    coffeeLimit: 2
  },
  {
    id: 'coffee-13',
    image: '/images/coffee/coffee-13.png',
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 17.90,
    coffeeLimit: 1
  },
  {
    id: 'coffee-14',
    image: '/images/coffee/coffee-14.png',
    tags: ['Especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.20,
    coffeeLimit: 2
  }
]
