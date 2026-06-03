---
title: Function.ScalarVector
---

# Function.ScalarVector


Hiermit wird eine Skalarfunktion basierend auf einer Vektorfunktion erstellt, sodass mehrere Aufrufe in einem Batch zusammengefasst werden.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Hiermit wird eine Skalarfunktion vom Typ "`scalarFunctionType`" zurückgegeben, die "`vectorFunction`" mit einer einzigen Zeile mit Argumenten aufruft und eine einzelne Ausgabe zurückgibt. Wenn die Skalarfunktion wiederholt auf jede Zeile einer Tabelle mit Eingaben angewendet wird (z. B. "Table.AddColumn"), wird "`vectorFunction`" stattdessen einmalig für alle Eingaben angewendet.

An "`vectorFunction`" wird eine Tabelle übergeben, deren Spalten im Hinblick auf Name und Position den Parametern von "`scalarFunctionType`" entsprechen. Jede Zeile dieser Tabelle enthält die Argumente für einen Aufruf der Skalarfunktion, wobei die Spalten den Parametern von "`scalarFunctionType`" entsprechen.

"`vectorFunction`" muss eine Liste der gleichen Länge zurückgeben wie die Eingabetabelle, deren Element an jeder Position das gleiche Ergebnis aufweisen muss wie die Auswertung der Skalarfunktion für die Eingabezeile derselben Position.

Die Eingabetabelle wird als Streamingtabelle vorausgesetzt, deshalb wird für "`vectorFunction`" erwartet, dass die zugehörige Ausgabe zeitgleich mit dem Empfang der Eingabe gestreamt wird. Hierbei werden die einzelnen Eingabeblöcke nacheinander verarbeitet. Insbesondere darf "`vectorFunction`" die zugehörige Eingabetabelle nicht mehrfach auflisten.


## Examples

### Example #1
Multiplizieren Sie zwei Spalten der Eingabetabelle, indem Sie die Eingaben in 100er-Batches verarbeiten.
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
Berechnen Sie Testergebnisse in Zweier-Batches, und füllen Sie ein Batch-ID-Feld auf, das verwendet werden kann, um zu überprüfen, ob die Batchverarbeitung wie erwartet funktioniert.
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
