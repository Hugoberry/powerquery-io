---
title: Function.ScalarVector
---

# Function.ScalarVector


Luo skalaarifunktion vektorifunktion päälle tehden useista kutsuista erän.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Palauttaa tyypin `scalarFunctionType` skalaarifunktion, joka kutsuu kohdetta `vectorFunction` käyttäen yksittäistä riviä argumentteja ja palauttaa sen yksittäisen tulosteen. Lisäksi, kun skalaarifunktiota käytetään toistuvasti jokaiselle riville syötetaulukossa, kuten Table.AddColumn, sen sijaan kohdetta `vectorFunction` käytetään kerran kaikille syötteille.

Kohteelle `vectorFunction` välitetään taulukko, jonka sarakkeet vastaavat kohteen `scalarFunctionType` parametrien nimeä ja sijaintia. Tämän taulukon kukin rivi sisältää skalaarifunktion yhden kutsun argumentit niin, että sarakkeet vastaavat kohteen `scalarFunctionType` parametreja.

Kohteen `vectorFunction` on palautettava luettelo, joka on saman pituinen kuin syötetaulukko, jonka kohteen kussakin sijainnissa on oltava sama tulos kuin skalaarifunktion arvioimisella samassa sijainnissa olevalla syöterivillä.

Syötetaulukon odotetaan virtauttettavan sisään, joten kohteen `vectorFunction` odotetaan virtauttavan tulosteensa syötteen tullessa sisään käsitellen yhtä syötelohkoa kerrallaan. Tarkemmin sanottuna kohde `vectorFunction` ei saa luetteloida syötetaulukkoaan useammin kuin kerran.


## Examples

### Example #1
Kerro syötetaulukon kaksi saraketta käsittelemällä syötteet 100 kohteen erissä.
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
Laske testitulokset kahden kohteen erissä ja täytä erätunnuskenttä, jolla voidaan varmistaa, että eräprosessi toimii odotetusti.
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
