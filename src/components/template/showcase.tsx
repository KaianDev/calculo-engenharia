import { Footer } from "./footer"

export const Showcase = () => {
  return (
    <div className="flex-1 flex-col items-center justify-center border-l bg-zinc-100 border-border hidden lg:flex">
      <div className="flex-1 flex items-center justify-center">
        <img src="/team-builder.svg" alt="Team Builder SVG" />
      </div>
      <Footer />
    </div>
  )
}
