---
title: Function.ScalarVector
---

# Function.ScalarVector


Vytvoří skalární funkci nad vektorovou funkcí, dávkuje se více volání.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Vrátí skalární funkci typu `scalarFunctionType`, která volá `vectorFunction` s jedním řádkem argumentů a vrátí jeden výstup. Kromě toho, když je tato skalární funkce opakovaně použita pro každý řádek tabulky vstupů, například v Table.AddColumn, použije se místo toho `vectorFunction` jednou pro všechny vstupy.

`vectorFunction` se předá jako tabulka, jejíž sloupce odpovídají názvu a pozici parametrů v `scalarFunctionType`. Každý řádek v této tabulce obsahuje argumenty pro jedno volání dané skalární funkce se sloupci odpovídajícími parametrům v `scalarFunctionType`.

`vectorFunction` musí vrátit seznam stejné délky jako vstupní tabulka a položky tohoto seznamu na každé pozici musí být stejný výsledek, jaký by přineslo vyhodnocení skalární funkce na vstupním řádku na stejné pozici.

Očekává se, že vstupní tabulka bude dodána streamem, takže se očekává, že `vectorFunction` bude streamovat svůj výstup průběžně s tím, jak bude přicházet vstup. Vždy se bude současně pracovat jen s jedním blokem dat. Především nesmí `vectorFunction` provést výčet vstupní tabulky více než jednou.


## Examples

### Example #1
Vynásobte dva sloupce vstupní tabulky zpracováním vstupů v dávkách po 100.
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
Vypočítá skóre testu v dávkách po dvou a naplní pole ID dávky, které se dá použít k ověření, že dávkování funguje podle očekávání.
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
