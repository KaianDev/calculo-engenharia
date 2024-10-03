import { Link } from "react-router-dom"

// Components
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HardHatIcon, MenuIcon } from "lucide-react"

// Utilities
import { cn } from "@/lib/utils"

export const Header = () => {
  return (
    <header className="space-y-4 w-full max-w-96 md:w-full py-4 flex bg-background justify-between border-b-2 sticky top-0">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="pb-6">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav>
            <ul className="flex flex-col justify-center gap-4">
              <li>
                <Link
                  to={"/calculo-engenharia"}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full gap-2 justify-start"
                  )}>
                  <HardHatIcon size={20} />
                  Cálculo engenharia
                </Link>
              </li>
              {/* <li>
                <Link
                  to={"/calculo-engenharia"}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full gap-2 justify-start"
                  )}>
                  <LeafIcon size={20} />
                  Cálculo agricultura
                </Link>
              </li> */}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
      <h1 className="text-4xl font-black text-center">Facilitador</h1>
      <div className="size-10" />
    </header>
  )
}
