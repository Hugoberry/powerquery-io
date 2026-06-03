---
title: Function.ScalarVector
---

# Function.ScalarVector


在向量函数的基础上创建一个标量函数，批量处理多次调用。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

返回类型为 `scalarFunctionType` 的标量函数，该函数使用单行参数调用 `vectorFunction` 并返回其单个输出。此外，对每行输入表(例如，在 Table.AddColumn 中)重复应用标量函数时，将对所有输入应用 `vectorFunction` 一次。

将向 `vectorFunction` 传递一个表，该表的列匹配 `scalarFunctionType` 的参数的名称和位置。此表的每行均包含对标量函数的单个调用的参数，其中列对应于 `scalarFunctionType` 的参数

`vectorFunction` 必须返回一个与输入表长度相同的列表，其中每个位置的项必须与在对同一位置的输入行上的标量函数进行评估的结果相同。

输入表应流式传入，因此，`vectorFunction` 应在输入传入时流式传出其输出，一次仅处理一个输入区块。尤其要注意，`vectorFunction` 枚举其输入表的次数不能超过一次。


## Examples

### Example #1
按每批 100 项的方式处理输入，对输入表中的两列进行相乘运算。
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
按每批两项计算测试分数，并填充一个批处理 ID 字段，该字段可用于验证批处理是否按预期工作。
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
