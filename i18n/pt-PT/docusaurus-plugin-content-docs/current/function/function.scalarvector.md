---
title: Function.ScalarVector
---

# Function.ScalarVector


Cria uma função escalar sobre uma função de vetor, colocando várias invocações em lote.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Devolve uma função escalar do tipo `scalarFunctionType` que invoca `vectorFunction` com uma única linha de argumentos e devolve o resultado último. Além disso, quando a função escalar for repetidamente aplicada a cada linha de uma tabela de entradas, tal como em Table.AddColumn, `vectorFunction` será aplicado uma vez para todas as entradas.

`vectorFunction` receberá uma tabela cujas colunas correspondem em nome e posição aos parâmetros de `scalarFunctionType`. Cada linha desta tabela contém os argumentos para uma chamada para a função escalar, com as colunas correspondentes aos parâmetros de `scalarFunctionType`.

`vectorFunction` tem de devolver uma lista do mesmo tamanho que a tabela de entrada, cujo item em cada posição tem de ser o mesmo resultado de avaliar a função escalar na linha de entrada na mesma posição.

Espera-se que a tabela de entrada seja transmitida, pelo que é esperado que `vectorFunction` transmita o resultado quando a entrada chegar, trabalhando apenas com um bloco de entradas de cada vez. Especificamente, `vectorFunction` não pode enumerar a respetiva tabela de entrada mais do que uma vez.


## Examples

### Example #1
Multiplique duas colunas da tabela de entrada processando as entradas em lotes de 100.
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
Calcule as pontuações dos testes de computação em lotes de dois e preencha um campo de ID de lote que pode ser utilizado para verificar se a criação de batches está a funcionar conforme esperado.
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
