---
title: Function.ScalarVector
---

# Function.ScalarVector


Tworzy funkcję skalarną opartą na funkcji wektorowej, konstruując partię z wielu wywołań.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Zwraca funkcję skalarną typu `scalarFunctionType`, która wywołuje funkcję `vectorFunction` z pojedynczym wierszem argumentów i zwraca dla niej pojedynczą wartość wyjściową. Ponadto wielokrotne zastosowanie funkcji skalarnej dla każdego wiersza tabeli danych wejściowych, takiej jak Table.AddColumn, spowoduje zamiast tego jednokrotne zastosowanie funkcji `vectorFunction` dla wszystkich danych wejściowych.

Do funkcji `vectorFunction` zostanie przekazana tabela, której kolumny pasują do parametrów typu `scalarFunctionType` ze względu na nazwę i pozycję. Każdy wiersz tej tabeli zawiera argumenty dla jednego wywołania funkcji skalarnej, przy czym kolumny odpowiadają parametrom typu `scalarFunctionType`.

Funkcja `vectorFunction` musi zwracać listę tej samej długości co tabela wejściowa, a każdy element tej listy musi mieć taki sam wynik jak wynik obliczenia funkcji skalarnej dla wiersza wejściowego w odpowiadającym położeniu.

Oczekuje się, że tabela wejściowa będzie przesyłana strumieniowo, więc oczekuje się także, że funkcja `vectorFunction` będzie przesyłać strumieniowo dane wyjściowe w miarę nadsyłania danych wejściowych, przetwarzając w danym czasie tylko jeden fragment danych wejściowych. W szczególności funkcja `vectorFunction` nie może iterować swojej tabeli wejściowej więcej niż raz.


## Examples

### Example #1
Pomnóż dwie kolumny tabeli danych wejściowych, przetwarzając dane wejściowe w partiach po 100.
```powerquery
let
    Compute.ScoreScalar = (left, right) => left * right,
    // When Function.ScalarVector batching kicks in, we'll receive all
    // of the inputs for the entire table here at once.
    Compute.ScoreVector = (input) => let
        chunks = Table.Split(input, 100),
        scoreChunk = (chunk) => Table.TransformRows(chunk, each Compute.ScoreScalar([left], [right]))
      in
        List.Combine(List.Transform(chunks, scoreChunk)),
    Compute.Score = Function.ScalarVector(type function (left as number, right as number) as number, Compute.ScoreVector),
    Final = Table.AddColumn(
        Table.FromRecords({
            [a = 1, b = 2],
            [a = 3, b = 4]
        }),
        "Result",
        each Compute.Score([a], [b])
    )
in
    Final
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, Result = 2],
    [a = 3, b = 4, Result = 12]
})
```


### Example #2
Oblicz wyniki testów w partiach po dwa i wypełnij pole identyfikatora partii, którego można użyć do sprawdzenia, czy przetwarzanie partii działa zgodnie z oczekiwaniami.
```powerquery
let
  _GradeTest = (right, total) => Number.Round(right / total, 2),
  _GradeTests = (inputs as table) as list => let
    batches = Table.Split(inputs, 2),
    gradeBatch = (batch as table) as list =>
      let
        batchId = Text.NewGuid()
      in
        Table.TransformRows(batch, each [Grade = _GradeTest([right], [total]), BatchId = batchId])
  in
    List.Combine(List.Transform(batches, gradeBatch)),
  GradeTest = Function.ScalarVector(type function (right as number, total as number) as number, _GradeTests),
  Tests = #table(type table [Test Name = text, Right = number, Total = number],
    {
      {"Quiz 1", 3, 4},
      {"Test 1", 17, 22},
      {"Quiz 2", 10, 10}
    }),
  // To break batching, replace [Right] with {[Right]}{0}.
  TestsWithGrades = Table.AddColumn(Tests, "Grade Info", each GradeTest([Right], [Total]), type record),
  // To verify batching, also expand BatchId.
  Final = Table.ExpandRecordColumn(TestsWithGrades, "Grade Info", {"Grade"})
in
  Final
```

Result: 
```powerquery
#table(
    type table [Test Name = text, Right = number, Total = number, Grade = number],
    {
      {"Quiz 1", 3, 4, 0.75},
      {"Test 1", 17, 22, 0.77},
      {"Quiz 2", 10, 10, 1}
    }
)
```




## Category
Function
