---
title: Function.ScalarVector
---

# Function.ScalarVector


Создает скалярную функцию на основе векторной, пакетно обрабатывая множество вызовов.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Возвращает скалярную функцию типа `scalarFunctionType`, которая вызывает `vectorFunction` с одной строкой аргументов и возвращает один набор выходных данных. Кроме того, если скалярная функция многократно применяется к каждой строке таблицы входных данных, как в Table.AddColumn, то вместо нее ко всем входным данным будет однократно применена функция `vectorFunction`.

В `vectorFunction` будет передана таблица, чьи столбцы соответствуют по имени и позиции параметрам `scalarFunctionType`. Каждая строка этой таблицы содержит аргументы для одного вызова скалярной функции, а столбцы соответствуют параметрам `scalarFunctionType`.

Функция `vectorFunction` должна вернуть список той же длины, что и входная таблица, и его элементы в каждой позиции должны соответствовать результату вычисления скалярной функции для входной строки в той же позиции.

Ожидается, что таблица будет передана с помощью потоковой передачи и что `vectorFunction` будет по очереди выполнять потоковую передачу всех блоков выходных данных по мере получения входных. В частности, функция `vectorFunction` не должна перечислять входную таблицу больше одного раза.


## Examples

### Example #1
Умножить два столбца входной таблицы, обрабатывая входные данные пакетами по 100.
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
Вычислять оценки тестов пакетами по два и заполнить поле с идентификатором пакета, которое можно использовать для проверки правильности работы пакета.
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
