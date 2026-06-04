---
title: Function.ScalarVector
---

# Function.ScalarVector


Papildus vektora funkcijai izveido skalāru funkciju, apvienojot vairākas izsaukšanas.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Atgriež skalāru funkciju ar tipu `scalarFunctionType`, kas izsauc `vectorFunction` ar vienu argumentu rindu un atgriež tā vienkāršo izvadi. Turklāt, kad skalārā funkcija tiek atkārtoti lietota katrai ievades tabulas rindai, piemēram, Table.AddColumn, tā vietā vektrora funkcija `vectorFunction` visām ievadēm tiek lietota vienreiz.

`vectorFunction` tiks nodots uz tabulu, kuras kolonnu nosaukums un pozīcija atbilst `scalarFunctionType` parametriem. Katrā šīs tabulas rindā ir argumenti vienam izsaukumam uz skalāro funkciju, un kolonnas atbilst `scalarFunctionType` parametriem.

`vectorFunction` ir jāatgriež tāda paša garuma saraksts kā ievades tabulai, kuras vienumam katrā pozīcijā ir nepieciešams tāds pats rezultāts kā skalārās fukcijas vērtējumam tās pašas pozīcijas ievades rindā.

Ievades tabulu ir paredzēts iestraumēt, tādēļ tiek gaidīts, ka `vectorFunction` savu izvadi straumē, ienākot ievadei, vienlaikus strādājot tikai ar vienu ievades porciju. Konkrētāk — `vectorFunction` nedrīkst uzskaitīt savu ievades tabulu vairākas reizes.


## Examples

### Example #1
Reiziniet divas ievades tabulas kolonnas, apstrādājot datus 100 vienību pakešos.
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
Aprēķiniet testa rezultātus divu vienību pakešos un aizpildiet pakešu ID lauku, ko var izmantot, lai pārbaudītu, vai pakešveida apstrāde darbojas kā paredzēts.
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
