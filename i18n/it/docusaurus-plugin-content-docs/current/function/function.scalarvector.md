---
title: Function.ScalarVector
---

# Function.ScalarVector


Crea una funzione scalare in aggiunta a una funzione vettoriale, inviando un batch più chiamate.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Restituisce una funzione scalare di tipo `scalarFunctionType` che richiama `vectorFunction` con una singola riga di argomenti e restituisce il relativo output singolo. Quando inoltre la funzione scalare viene applicata ripetutamente per ogni riga di una tabella di input, come in Table.AddColumn, la funzione `vectorFunction` verrà applicata una sola volta per tutti gli input.

A `vectorFunction` verrà passata una tabella le cui colonne corrispondono al nome e alla posizione dei parametri di `scalarFunctionType`. Ogni riga di questa tabella contiene gli argomenti per una chiamata alla funzione scalare, in cui le colonne corrispondono ai parametri di `scalarFunctionType`.

`vectorFunction` deve restituire un elenco della stessa lunghezza della tabella di input, il cui elemento in ogni posizione deve essere uguale al risultato della valutazione della funzione scalare nella riga di input della stessa posizione.

È previsto lo streaming della tabella di input, di conseguenza `vectorFunction` dovrebbe eseguire lo streaming dell'output non appena riceve l'input e usare quindi un solo blocco di input alla volta. In particolare, `vectorFunction` non deve enumerare la relativa tabella di input più di una volta.


## Examples

### Example #1
Moltiplica due colonne della tabella di input elaborando gli input in batch di 100.
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
Calcola i punteggi dei test in batch di due e compila un campo ID batch che può essere usato per verificare che l'invio in batch funzioni come previsto.
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
