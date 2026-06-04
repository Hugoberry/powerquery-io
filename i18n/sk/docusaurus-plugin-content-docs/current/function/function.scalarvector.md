---
title: Function.ScalarVector
---

# Function.ScalarVector


Vytvorí skalárnu funkciu nad vektorovou funkciou, dávkuje viacero vyvolaní.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Vráti skalárnu funkciu typu `scalarFunctionType`, ktorá vyvolá `vectorFunction` s jedným riadkom argumentov a vráti jeden výstup. Okrem toho, keď sa skalárna funkcia opakovane použije pre každý riadok tabuľky vstupov, ako napríklad Table.AddColumn, namiesto toho sa `vectorFunction` použije raz pre všetky vstupy.

`vectorFunction` sa odovzdá ako tabuľka, ktorej stĺpce sa zhodujú v názve a v umiestnení parametra v `scalarFunctionType`. Každý riadok tejto tabuľky obsahuje argumenty pre jedno volanie skalárnej funkcie so stĺpcami zodpovedajúcimi parametrom vo funkcii `scalarFunctionType`.

`vectorFunction` musí vrátiť zoznam rovnakej dĺžky ako vstupná tabuľka, ktorej položky v každej pozícii musia mať rovnaký výsledok, ako by prinieslo vyhodnotenie skalárnej funkcie na vstupnom riadku v rovnakej pozícii.

Očakáva sa, že vstupnú tabuľku dodá stream, takže sa očakáva, že `vectorFunction` bude streamovať svoj výstup popri tom, ako bude prichádzať vstup. Vždy sa pracuje len s jedným blokom vstupných údajov naraz. `vectorFunction` hlavne nesmie vykonať enumeráciu vstupnej tabuľky viac než raz.


## Examples

### Example #1
Vynásobte dva stĺpce vstupnej tabuľky spracovaním vstupov v dávkach po 100.
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
Vypočítajte výsledky testov v dávkach po dvoch a vyplňte pole ID dávky, ktoré možno použiť na overenie, či dávkovanie funguje podľa očakávania.
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
