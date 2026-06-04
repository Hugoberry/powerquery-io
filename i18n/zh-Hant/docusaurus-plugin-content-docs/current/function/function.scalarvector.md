---
title: Function.ScalarVector
---

# Function.ScalarVector


在向量函式之上建立純量函式，來批次處理多個引動過程。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

傳回類型 `scalarFunctionType` 的純量函式，會以單一引數資料列叫用 `vectorFunction` 並傳回其單一輸出。此外，當純量函式反覆套用至 Table.AddColumn 等輸入資料表的各資料列時，`vectorFunction` 會改為只套用至所有輸入一次。

`vectorFunction` 會傳遞至資料行符合 `scalarFunctionType` 參數名稱與位置的資料表。此資料表的各資料列均包含呼叫一次純量函式的引數，以及與 `scalarFunctionType` 參數對應的資料行。

`vectorFunction` 必須傳回長度與輸入資料表相同的清單，其在各位置上的項目與在相同位置輸入資料列上的純量函式評估結果必須相同。

輸入資料表應為串流輸出位置，因此 `vectorFunction` 的串流輸出與輸入在同一時間僅應適用於一個區塊。具體來說，`vectorFunction` 不得多次列舉其輸入資料表。


## Examples

### Example #1
將輸入資料表的兩欄以每批 100 筆的方式相乘處理。
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
以兩筆為一批次計算測試分數，並填入批次識別碼欄位，以便驗證批次處理是否如預期運作。
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
