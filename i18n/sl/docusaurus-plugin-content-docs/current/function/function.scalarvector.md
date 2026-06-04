---
title: Function.ScalarVector
---

# Function.ScalarVector


Ustvari skalarno funkcijo poleg vektorske funkcije in v en paket združi več priklicev.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Vrne skalarno funkcijo vrste"`scalarFunctionType`", ki prikliče `vectorFunction` z eno vrstico argumentov in vrne en sam rezultat. Če je skalarna funkcija uporabljena zaporedoma za vsako vrstico tabele rezultatov, kot je"Table.AddColumn", bo poleg tega `vectorFunction` uporabljena za vse vnose.

`vectorFunction` bo uporabljena v tabeli, katere stolpci se ujemajo v imenu in položaju parametrov funkcije `scalarFunctionType`. Vsaka vrstica te tabele vsebuje argumente za en klic skalarne funkcije s stolpci, ki ustrezajo parametrom fukcije `scalarFunctionType`.

`vectorFunction` mora vrniti seznam z enako dolžino kot vhodna tabela, katere element na vsakem položaju mora biti isti rezultat kot ovrednotenje skalarne funkcije v vnosni vrstici istega položaja.

Pričakovano je, da je vnosna tabela pretakana, zato je pričakovano, da `vectorFunction` pretaka svoj rezultat, ko je dodan vnos, in deluje samo z enim koščkom vnosa hkrati. Zlasti `vectorFunction` ne sme oštevilčiti svoje vnosne tabele več kot enkrat.


## Examples

### Example #1
Pomnožite dva stolpca vhodne tabele z obdelavo vnosov v paketih po 100.
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
Izračunajte ocene preskusov v paketih po dva in vnesite polje z ID-jem paketa, ki ga lahko uporabite za preverjanje, ali združevanje v pakete deluje po pričakovanjih.
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
