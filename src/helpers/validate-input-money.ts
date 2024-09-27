import type { FieldValues, Path, UseFormReturn } from "react-hook-form"

interface ValidateInputMoneyEngineerCalc<T extends FieldValues> {
  form: UseFormReturn<T>
  value: number
  name: Path<T>
}

export const validadeInputMoney = <T extends FieldValues>({
  form,
  value,
  name,
}: ValidateInputMoneyEngineerCalc<T>) => {
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
      message: "O valor do campo não pode negativo",
    })
    return false
  }

  if (value === 0) {
    form.setError(name, {
      type: "zeroValue",
      message: "O valor do campo não pode ser zero",
    })
    return false
  }

  return true
}
