import type { PropsWithChildren } from "react"
import { Footer } from "./footer"
import { TeamBuilderSvg } from "../svg/team-builder"

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full flex flex-col  gap-6">
      <div className="flex-1 flex justify-center">
        <div className="flex items-center flex-col gap-8 p-6">
          <h1 className="text-4xl font-black text-center">Facilitador</h1>
          {children}
        </div>
        <div className="flex-1 flex-col items-center justify-center bg-zinc-700 hidden lg:flex">
          <div className="flex-1 flex items-center justify-center ">
            <TeamBuilderSvg />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
