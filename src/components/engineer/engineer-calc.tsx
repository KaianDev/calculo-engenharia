import { useState } from "react"

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EngineerCalcForm } from "./engineer-calc-form"
import { EngineerCalcResults } from "./engineer-calc-results"

// Utilities
import type { EngineerResultCalc } from "@/types/engineer-result-calc"

export const EngineerCalc = () => {
  const [results, setResults] = useState<EngineerResultCalc | null>(null)

  const handleResultClear = () => setResults(null)

  return (
    <Card className="w-full max-w-96 sm:min-w-96">
      <CardHeader>
        <CardTitle>Cálculo de Engenharia</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <EngineerCalcForm results={results} setResults={setResults} />

        {results && (
          <EngineerCalcResults
            results={results}
            clearResults={handleResultClear}
          />
        )}
      </CardContent>
    </Card>
  )
}
