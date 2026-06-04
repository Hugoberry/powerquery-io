---
title: Function.ScalarVector
---

# Function.ScalarVector


Бірнеше шақыруды топтап, векторлық функциямен қатар скалярлық функцияны жасайды.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Аргументтердің бір жолы бар `vectorFunction` шақыратын `scalarFunctionType` түріндегі скалярлық функцияны қайтарады және оның бір шығысын қайтарады. Сонымен қатар, скалярлық функция кіріс деректері кестесінің әрбір жолы үшін қайталанып қолданылса, мысалы, Table.AddColumn, `vectorFunction` барлық кіріс деректері үшін бір рет қолданылады.

`vectorFunction` бағандары `scalarFunctionType` параметрлеріне аты мен орны бойынша сәйкес келетін кестеге өтеді. Бұл кестенің әрбір жолында скалярлық функция үшін бір шақыру үшін аргументтер болады, `scalarFunctionType` параметрлеріне сәйкес бағандармен.

`vectorFunction` кіріс кестесімен бірдей ұзындыққа ие тізімді қайтаруы тиіс, оның элементі әр орында бірдей орындағы кіріс жолында скалярлық функцияны бағалаумен бірдей нәтижеге ие болуы тиіс.

Кіріс кестесінің ағынмен кіруі күтіледі, кіріс келгенде `vectorFunction` өз шығысын ағынмен шығаруы күтіледі, бір мезгілде тек бір кіріс бөлігімен жұмыс істейді. Атап айтқанда, `vectorFunction` қзінің кіріс кестесін бірнеше рет көрсетпеуі тиіс.


## Examples

### Example #1
Енгізу кестесінің екі бағанын 100-ден тұратын топтамалармен өңдеу арқылы көбейтіңіз.
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
Сынақ нәтижелерін екі-екіден есептеп, жиынтықтың күтілгендей жұмыс істеп тұрғанын тексеру үшін пайдалануға болатын жиынтық идентификаторы өрісін толтырыңыз.
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
