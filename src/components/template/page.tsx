import type { PropsWithChildren } from "react"
import { Footer } from "./footer"

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center">Facilitador</h1>
        {children}
      </div>
      <Footer />
    </div>
  )
}
