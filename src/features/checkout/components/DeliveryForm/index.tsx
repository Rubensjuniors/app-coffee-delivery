/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod'
import { Banknote, Building2, CreditCard, DollarSign, MapPin } from 'lucide-react'
import { forwardRef, useImperativeHandle } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import z from 'zod'

import { Card, CardContent } from '@/shared/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

const formSchema = z.object({
  cep: z.string().min(8, 'CEP deve ter 8 dígitos').max(9, 'CEP inválido'),
  rua: z.string().min(3, 'Rua é obrigatória'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(2, 'Bairro é obrigatório'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  uf: z.string().length(2, 'UF deve ter 2 letras').toUpperCase(),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], 'Selecione uma forma de pagamento')
})

type FormData = z.infer<typeof formSchema>

export type DeliveryFormRef = {
  submit: () => Promise<FormData | null>
}

const DeliveryForm = forwardRef<DeliveryFormRef>((_, ref) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  })

  const paymentMethod = useWatch({
    control: form.control,
    name: 'paymentMethod'
  })

  useImperativeHandle(ref, () => ({
    submit: async() => {
      const isValid = await form.trigger()

      if (isValid) {
        return form.getValues()
      }

      return null
    }
  }))

  return (
    <div className="w-full mt-4">
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          {/* Endereço de Entrega */}
          <Card className="border-0">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary-foreground mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Endereço de Entrega</h2>
                  <p className="text-sm text-gray-500">Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="CEP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rua"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rua" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="numero"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Número" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="complemento"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="Complemento" {...field} />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground italic">
                              Opcional
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="bairro"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Bairro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="uf"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="UF" maxLength={2} {...field} className="uppercase" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagamento */}
          <Card className="border-0 p-4 mt-4">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Pagamento</h2>
                  <p className="text-sm text-gray-500">
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </p>
                </div>
              </div>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => field.onChange('credit')}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'credit' ? 'border-secondary' : 'border-border'
                          }`}
                        >
                          <CreditCard className="w-10 h-10 text-secondary" />
                          <span className="font-medium text-sm">CARTÃO DE CRÉDITO</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => field.onChange('debit')}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'debit' ? 'border-secondary' : 'border-border'
                          }`}
                        >
                          <Building2 className="w-10 h-10 text-secondary" />
                          <span className="font-medium text-sm">CARTÃO DE DÉBITO</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => field.onChange('cash')}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'cash' ? 'border-secondary' : 'border-border'
                          }`}
                        >
                          <Banknote className="w-10 h-10 text-secondary" />
                          <span className="font-medium text-sm">DINHEIRO</span>
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
})

DeliveryForm.displayName = 'DeliveryForm'

export default DeliveryForm
