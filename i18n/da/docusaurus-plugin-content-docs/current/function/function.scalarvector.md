---
title: Function.ScalarVector
---

# Function.ScalarVector


Opretter en skalarfunktion oven på en vektorfunktion, så flere aktiveringer batchkøres.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Returnerer en skalarfunktion af typen `scalarFunctionType`, der kalder `vectorFunction` med en enkelt række argumenter og returnerer sit enkelte output. Og når skalarfunktion gentagne gange anvendes for hver række i en tabel med input, f.eks Table.AddColumn, anvendes `vectorFunction` i stedet på én gang for alle input.

`vectorFunction` vil blive overført til en tabel, hvor kolonnernes navn og placering matcher parametrene i `scalarFunctionType`. Hver række i denne tabel indeholder argumenterne til ét kald til skalarfunktionen med de kolonner, der svarer til parametrene for `scalarFunctionType`.

`vectorFunction` skal returnere en liste med samme længde som inputtabellen, hvis element på hver position skal være det samme resultat som evalueringen af skalarfunktionen i inputrækken på samme placering.

Inputtabellen forventes at blive streamet ind, så `vectorFunction` forventes at streame outputtet, når der kommer input ind, og skal kun arbejde med én portion af inputtet ad gangen. `vectorFunction` må især ikke optælle sin inputtabel mere end én gang.


## Examples

### Example #1
Multiplicer to kolonner i inputtabellen ved at behandle input i batches på 100.
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
Beregn testresultater i batches af to, og udfyld et batch-id-felt, som kan bruges til at bekræfte, at batchkørsel fungerer som forventet.
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
