import { z } from "zod"

export const engineerCalcSchema = z.object({
  budgetValue: z.coerce
    .string({
      required_error: "O valor do orçamento é obrigatório",
    })
    .min(0, "O valor do orçamento deve ser maior que 0"),
  proposalValue: z.coerce
    .string({
      required_error: "O valor da proposta é obrigatório",
    })
    .min(0, "O valor da proposta deve ser maior que 0"),
})

export type EngineerCalcSchema = z.infer<typeof engineerCalcSchema>
