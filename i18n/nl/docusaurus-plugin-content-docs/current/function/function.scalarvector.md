---
title: Function.ScalarVector
---

# Function.ScalarVector


Hiermee wordt een scalaire functie gemaakt die op een vectorfunctie wordt uitgevoerd voor batchverwerking van meerdere aanroepen.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Hiermee wordt een scalaire functie van het type `scalarFunctionType` geretourneerd waarmee `vectorFunction` wordt aangeroepen via één rij met argumenten waarna één uitvoerwaarde wordt geretourneerd. Daarnaast wordt `vectorFunction` één keer toegepast op alle invoerwaarden wanneer de scalaire functie herhaaldelijk op elke rij van een tabel met invoerwaarden, zoals bij Table.AddColumn, wordt toegepast.

Er wordt aan `vectorFunction` een tabel doorgegeven met kolommen waarvan de naam en positie overeenkomen met de parameters van `scalarFunctionType`. Elke rij van deze tabel bevat de argumenten voor één aanroep van de scalaire functie, met de kolommen die overeenkomen met de parameters van `scalarFunctionType`.

Met `vectorFunction` moet een lijst worden geretourneerd met dezelfde lengte als de invoertabel waarvan items op elke positie hetzelfde resultaat moeten bevatten als de evaluatie met de scalaire functie van de invoerrij op dezelfde positie.

Voor de invoertabel wordt verwacht dat deze via streaming binnenkomt, waardoor voor `vectorFunction` wordt verwacht dat de uitvoer wordt gestreamd naarmate de invoer binnenkomt. Hierbij wordt één invoersegment tegelijk gebruikt. Het is met name belangrijk dat `vectorFunction` de eigen invoertabel niet vaker dan één keer opsomt.


## Examples

### Example #1
Vermenigvuldig twee kolommen van de invoertabel door de invoer in batches van 100 te verwerken.
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
Reken testscores in batches van twee en vul een batch-id-veld in dat kan worden gebruikt om te controleren of de batchverwerking werkt zoals verwacht.
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
