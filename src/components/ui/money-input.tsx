import { Input } from "./input"
import { forwardRef } from "react"
import { withMask } from "use-mask-input"

type MoneyInputProps = React.InputHTMLAttributes<HTMLInputElement>

export const MoneyInput = forwardRef<HTMLInputElement, MoneyInputProps>(
  (props) => {
    return (
      <Input
        {...props}
        type="text"
        ref={withMask(
          [
            "9,99",
            "99,99",
            "999,99",
            "9.999,99",
            "99.999,99",
            "999.999,99",
            "9.999.999,99",
          ],
          {
            placeholder: "0,00",
            showMaskOnHover: false,
          }
        )}
      />
    )
  }
)
