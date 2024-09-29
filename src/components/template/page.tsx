import type { PropsWithChildren } from "react"

// Components
import { Footer } from "./footer"
import { Showcase } from "./showcase"
import { Header } from "./header"

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-dvh w-full flex flex-col gap-6">
      <div className="flex-1 flex justify-center">
        <div className="flex items-center flex-col gap-8 px-6 pt-6 w-full sm:w-fit">
          <Header />
          <main className="w-full flex-1 flex justify-center items-start">
            {children}
          </main>
          <div className="block lg:hidden">
            <Footer />
          </div>
        </div>
        <Showcase />
      </div>
    </div>
  )
}
