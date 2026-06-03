---
title: Function.ScalarVector
---

# Function.ScalarVector


Crea una función escalar sobre una función de vector y procesa varias invocaciones por lotes.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Devuelve una función escalar de tipo `scalarFunctionType` que invoca `vectorFunction` con una sola fila de argumentos y devuelve su salida única. Además, cuando la función escalar se aplica repetidamente para cada fila de una tabla de entradas, como en Table.AddColumn, `vectorFunction` se aplicará una vez para todas las entradas en su lugar.

Se pasará una tabla a `vectorFunction`; las columnas de esta tabla tendrán el mismo nombre y la misma posición que los parámetros de `scalarFunctionType`. Cada fila de esta tabla contiene los argumentos de una llamada de la función escalar; las columnas se corresponden con los parámetros de `scalarFunctionType`.

`vectorFunction` debe devolver una lista con la misma longitud que la tabla de entradas. El elemento de cada posición de esta tabla debe equivaler a evaluar la función escalar en la fila de entrada de la misma posición.

Se espera que la tabla de entradas esté secuenciada, por lo que también se espera que `vectorFunction` secuencie los resultados a medida que recibe las entradas, así como que solo procese un fragmento de entradas al mismo tiempo. Específicamente, `vectorFunction` no debe enumerar su tabla de entradas más de una vez.


## Examples

### Example #1
Multiplica dos columnas de la tabla de entrada procesando las entradas en lotes de 100.
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
Calcula las puntuaciones de las pruebas en lotes de dos y rellena un campo de id. de lote que se pueda usar para comprobar que el procesamiento por lotes funciona como se espera.
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
