import type { EngineerCalcSchema } from "@/schemas/engineer"
import type { UseFormReturn } from "react-hook-form"

interface ValidateInputMoneyEngineerCalc {
  form: UseFormReturn<EngineerCalcSchema>
  value: number
  name: "budgetValue" | "proposalValue"
}

export const validadeInputMoney = ({
  form,
  value,
  name,
}: ValidateInputMoneyEngineerCalc) => {
  if (Number.isNaN(value)) {
    form.setError(name, {
      type: "manual",
      message: "Insira um valor",
    })
    return false
  }

  if (value < 0) {
    form.setError(name, {
      type: "nonPositiveValue",
      message: "Insira um valor válido",
    })
    return false
  }

  if (value === 0) {
    form.setError(name, {
      type: "zeroValue",
      message: "Insira um valor válido",
    })
    return false
  }

  return true
}
