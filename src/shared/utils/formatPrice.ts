export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const full = formatter.format(price) // ex: "R$ 1.234,56"

  const currency = full.match(/[^\d.,\s]+/g)?.[0] || 'R$'
  const value = full.replace(currency, '').trim()

  return {
    currency,
    price: value
  }
}
