---
title: Function.ScalarVector
---

# Function.ScalarVector


Crea unha función escalar sobre unha función de vector, procesando por lotes varias invocacións.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Devolve unha función escalar de tipo `scalarFunctionType` que invoca `vectorFunction` cunha única fila de argumentos e devolve unha única saída. Ademais, cando a función escalar se aplica de forma repetida a cada fila dunha táboa de entradas, como en Table.AddColumn, no seu lugar aplicarase `vectorFunction` unha vez para todas as entradas.

`vectorFunction` pasarase a unha táboa cuxas columnas coincidan no nome e na posición cos parámetros de `scalarFunctionType`. Cada fila desta táboa contén os argumentos para unha chamada á función escalar, coas columnas correspondentes aos parámetros de `scalarFunctionType`.

`vectorFunction` debe devolver unha lista da mesma lonxitude que a táboa de entrada, cuxo elemento en cada posición debe ser o mesmo resultado que avaliar a función na fila da a mesma posición de entrada escalar.

Espérase que a táboa de entrada se transmita, polo que se espera que `vectorFunction` transmita a súa saída na mesma medida na que se producen as entradas, traballando só cun fragmento de entrada en cada momento. En concreto, `vectorFunction` non debe enumerar a súa táboa de entrada máis dunha vez.


## Examples

### Example #1
Multiplica dúas columnas da táboa de entrada procesando as entradas en lotes de 100.
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
Calcula as puntuacións das probas en lotes de dous e enche un campo de ID de lote que podes usar para verificar que o lote funciona como esperas.
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
