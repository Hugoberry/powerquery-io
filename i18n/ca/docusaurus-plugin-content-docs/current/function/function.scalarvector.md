---
title: Function.ScalarVector
---

# Function.ScalarVector


Permet crear una funció escalar sobre una funció vectorial que transfereix múltiples invocacions en lots.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Torna una funció escalar del tipus `scalarFunctionType` que invoca `vectorFunction` amb una sola fina d'arguments i torna una sortida única. De manera addicional, si la funció escalar s'aplica repetidament per a cada fila de la taula d'entrades, com ara en el cas de Table.AddColumn, `vectorFunction` s'aplicarà una vegada per a totes les entrades.

`vectorFunction` rebrà una taula les columnes de la qual coincideixen en nom i posició amb els paràmetres de `scalarFunctionType`. Cada fila d'aquesta taula conté els arguments d'una trucada a la funció escalar, i les columnes corresponen als paràmetres de `scalarFunctionType`.

`vectorFunction` ha de tornar una llista de la mateixa longitud que la taula d'entrada, i l'element de cada posició ha de ser el mateix resultat que el de l'avaluació de la funció escalar sobre la fila d'entrada de la mateixa posició.

S'espera que la taula d'entrada es transmeti en una seqüència, de manera que també s'espera que `vectorFunction` transmeti la sortida a mesura que rep l'entrada i que només treballi amb un fragment d'entrada alhora. En particular, `vectorFunction` no ha de llistar la taula d'entrada més d'una vegada.


## Examples

### Example #1
Multiplica dues columnes de la taula d'entrada processant les dades en lots de 100.
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
Calcula les puntuacions de prova en lots de dos i emplena un camp d'ID de lot que es pot utilitzar per verificar que els lots funcionen com s'esperava.
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
