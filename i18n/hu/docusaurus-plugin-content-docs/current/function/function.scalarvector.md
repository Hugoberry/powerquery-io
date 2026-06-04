---
title: Function.ScalarVector
---

# Function.ScalarVector


Skaláris függvényt ad hozzá egy vektorfüggvényhez, és több hívást egy kötegbe fűz össze.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

`scalarFunctionType` típusú skaláris függvényt ad vissza, amely a(z) `vectorFunction` függvényt hívja meg egy sornyi argumentummal, és annak egyetlen kimeneti értékét adja vissza. Emellett, ha a skaláris függvény ismételten alkalmazva van egy bemeneti tábla minden sorára (pl.: Table.AddColumn), a rendszer helyette a(z) `vectorFunction` függvényt alkalmazza egyszer minden bemenetre.

A(z) `vectorFunction` függvény egy olyan táblát kap, amelynek oszlopai elnevezésben és pozícióban is megegyeznek a(z) `scalarFunctionType` függvény paramétereivel. A tábla minden egyes sora a skaláris függvény egyszeri meghívásának argumentumait tartalmazza, és oszlopai megfelelnek a(z) `scalarFunctionType` függvény paramétereinek.

A(z) `vectorFunction` függvénynek a bemeneti táblával azonos hosszúságú listát kell visszaadnia, amelyben az elemnek minden pozícióban egyeznie kell azzal az eredménnyel, amelyet az azonos pozíciójú bemeneti sor skaláris függvényének kiértékelése ad.

A bemeneti táblának streameléssel kell beérkeznie, ezért a(z) `vectorFunction` függvénynek a bemenet érkezésekor streamelnie kell a kimenetet, miközben egyszerre csak egy bemenettömböt kezelhet. Különösen fontos, hogy a(z) `vectorFunction` függvény csak egyszer enumerálja a hozzá tartozó bemeneti táblát.


## Examples

### Example #1
A bemeneti tábla két oszlopának összeszorzása a bemenetek 100-as kötegekben való feldolgozása révén.
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
Tesztpontszámok kiszámítása kettes kötegekben és egy kötegazonosító mező kitöltése, amellyel ellenőrizhető, hogy a kötegelés a várt módon működik-e.
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
