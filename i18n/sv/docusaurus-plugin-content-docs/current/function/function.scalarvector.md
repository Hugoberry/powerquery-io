---
title: Function.ScalarVector
---

# Function.ScalarVector


Skapar en skalärfunktion ovanpå en vektorfunktion vilket batchbearbetar flera anrop.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Returnerar en skalär funktion av typen `scalarFunctionType` som anropar `vectorFunction` med en enda rad med argument och returnerar sin enda utdata. Dessutom när skalärfunktionen upprepade gånger används för varje rad i en tabell med indata, till exempel i Table.AddColumn, kommer istället `vectorFunction` att användas en gång för alla indata.

`vectorFunction` skickas en tabell vars kolumner i namn och position matchar parametrarna för `scalarFunctionType`. Varje rad i den här tabellen innehåller argument för ett anrop till skalärfunktionen med de kolumner som motsvarar parametrarna för `scalarFunctionType`.

`vectorFunction` måste returnera en lista med samma längd som indatatabellen vars objekt vid varje position måste vara samma resultat som utvärderar skalärfunktionen på indataraden för samma position.

Indatatabellen förväntas strömmas in så `vectorFunction` förväntas strömma sina utdata allteftersom indata kommer in och bara arbeta med ett segment indata åt gången. `vectorFunction` får specifikt inte räkna upp dess indatatabell mer än en gång.


## Examples

### Example #1
Multiplicera två kolumner i indatatabellen genom att bearbeta indata i grupper om 100.
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
Beräkna testresultat i grupper om två och fyll i ett batch-id-fält som kan användas för att kontrollera att batchhanteringen fungerar som förväntat.
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
