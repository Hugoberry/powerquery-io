---
title: Function.ScalarVector
---

# Function.ScalarVector


ベクトル関数の上にスカラー関数を作成し、複数の呼び出しをバッチ処理します。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

1 行の引数で `vectorFunction` を呼び出す `scalarFunctionType` 型のスカラー関数を返し、その単一の出力を返します。さらに、スカラー関数が Table.AddColumn などの入力テーブルの各行に対して繰り返し適用される場合、代わりに `vectorFunction` がすべての入力に対して 1 回適用されます。

名前と一致する列を持ち、`scalarFunctionType` のパラメーターを配置するテーブルに `vectorFunction` が渡されます。このテーブルの各行には、スカラー関数の 1 回の呼び出しの引数が含まれ、列は `scalarFunctionType` のパラメーターに対応します。

`vectorFunction` は、入力テーブルと同じ長さのリストを返さなければなりません。各位置の項目は、同じ位置の入力行のスカラー関数の評価と同じ結果でなければなりません。

入力テーブルにはストリーミングが入ってくることが予期されるので、入力が入ってきたときに `vectorFunction` は出力をストリーミングする必要があります。一度に 1 つの入力チャンクでしか動作しません。特に、`vectorFunction` は入力テーブルを複数回列挙してはなりません。


## Examples

### Example #1
入力を 100 件ずつのバッチで処理し、入力テーブルの 2 つの列を乗算します。
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
テストスコアを 2 つのバッチで計算し、バッチ処理が期待どおりに動作していることを確認するために使用できるバッチ ID フィールドを設定します。
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
