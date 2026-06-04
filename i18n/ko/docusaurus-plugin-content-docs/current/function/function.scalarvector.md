---
title: Function.ScalarVector
---

# Function.ScalarVector


벡터 함수 위에 스칼라 함수를 만들어 다중 호출을 일괄 처리합니다.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

단일 인수 행과 `vectorFunction`을(를) 함께 호출하고 단일 출력을 반환하는 `scalarFunctionType` 유형의 스칼라 함수를 반환합니다. 또한 Table.AddColumn에서처럼 입력 테이블의 각 행에 대해 스칼라 함수가 반복해서 적용되는 경우 대신 모든 입력에 대해 `vectorFunction`이(가) 한 번만 적용됩니다.

`vectorFunction`은(는) 해당 열이 이름이 일치하고 `scalarFunctionType`의 매개 변수를 배치하는 테이블에 전달됩니다. 이 테이블의 각 행에는 스칼라 함수의 1회 호출에 대한 인수와 함께 `scalarFunctionType`의 매개 변수에 해당하는 열이 포함되어 있습니다.

`vectorFunction`은(는) 입력 테이블과 길이가 동일한 목록을 반환해야 하며, 각 위치에 있는 해당 테이블의 항목은 동일한 위치의 입력 행에서 스칼라 함수를 평가한 결과와 같아야 합니다.

입력 테이블은 스트리밍해야 하므로 `vectorFunction`은(는) 입력이 들어올 때 해당 출력을 스트리밍하여 한 번에 하나의 입력 청크와만 작동해야 합니다. 특히, `vectorFunction`은(는) 입력 테이블을 두 번 이상 열거해서는 안 됩니다.


## Examples

### Example #1
입력을 100개씩 일괄 처리하여 입력 테이블의 두 열을 곱합니다.
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
2개의 일괄 처리로 테스트 점수를 계산하고 일괄 처리가 예상대로 작동하는지 확인하는 데 사용할 수 있는 일괄 처리 ID 필드를 채웁니다.
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
