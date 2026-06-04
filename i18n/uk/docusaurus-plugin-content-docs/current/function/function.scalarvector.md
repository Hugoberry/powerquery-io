---
title: Function.ScalarVector
---

# Function.ScalarVector


Створює скалярну функцію на основі векторної та групує кілька операцій викликів.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Повертає скалярну функцію типу `scalarFunctionType`, яка викликає функцію `vectorFunction` для одного рядка аргументів, і її єдиний результат. Якщо ж скалярна функція повторно застосовується в кожному рядку таблиці вхідних даних (як у випадку Table.AddColumn), функція `vectorFunction` застосовується натомість одноразово до всіх вхідних даних.

Функція `vectorFunction` передається в таблицю, стовпці якої за ім’ям і розташуванням відповідають параметрам функції `scalarFunctionType`. Кожен рядок цієї таблиці містить аргументи для одного виклику скалярної функції, а стовпці відповідають параметрам функції `scalarFunctionType`.

Функція `vectorFunction` має повернути список такої ж довжини, що й таблиця вхідних даних, чий елемент у кожному розташуванні має збігатися з результатами обчислення скалярної функції в рядку вхідних даних в аналогічному розташуванні.

Очікується, що таблиця вхідних даних передаватиметься потоком, тому функція `vectorFunction` має передавати результати в темпі отримання вхідних даних, працюючи при цьому з одним блоком вхідних даних за раз. Зокрема, функція `vectorFunction` має нумерувати таблицю вхідних даних не більше одного разу.


## Examples

### Example #1
Помножте два стовпці вхідної таблиці, обробляючи вхідні дані пакетами по 100.
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
Обчислюйте тестові оцінки пакетами по два та заповнюйте поле ідентифікатора пакета, яке можна використати для перевірки правильності пакетної обробки.
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
