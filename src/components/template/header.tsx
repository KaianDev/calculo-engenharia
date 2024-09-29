import { Link } from "react-router-dom"
import { Button } from "../ui/button"

export const Header = () => {
  return (
    <header className="space-y-4">
      <h1 className="text-4xl font-black text-center">Facilitador</h1>
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <Button variant="secondary" size="sm" asChild>
              <Link to={"/calculo-engenharia"}>Cálculo engenharia</Link>
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="sm" asChild>
              <Link to={"/calculo-agricultura"}>Cálculo Agricultura</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
