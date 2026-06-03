---
title: Function.ScalarVector
---

# Function.ScalarVector


Tạo hàm vô hướng ở đầu hàm vec-tơ, phân lô nhiều viện dẫn.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Trả về một hàm vô hướng thuộc loại `scalarFunctionType` gọi `vectorFunction` cùng với một hàng đối số và trả về dữ liệu xuất đơn. Thêm vào đó, khi áp dụng nhiều lần hàm vô hướng cho từng hàng của bảng nhập, chẳng hạn như trong Table.AddColumn, thì `vectorFunction` sẽ được áp dụng một lần cho toàn bộ dữ liệu nhập.

`vectorFunction` sẽ được chuyển qua một bảng có cùng tên cột và vị trí của tham số `scalarFunctionType`. Mỗi hàng của bảng này chứa các đối số cho một lệnh gọi tới hàm vô hướng, cùng với các cột tương ứng với những thông số `scalarFunctionType`.

`vectorFunction` phải trả về danh sách có cùng độ dài với bảng nhập, trong đó mục ở mỗi vị trí phải có cùng kết quả với đánh giá hàm vô hướng trên hàng nhập của chính vị trí đó.

Theo dự kiến, bảng nhập sẽ được đưa vào, vì vậy, `vectorFunction` dự kiến sẽ đưa vào dữ liệu xuất dưới dạng dữ liệu nhập, chỉ hoạt động với một khúc dữ liệu nhập mỗi lần. Cụ thể là, `vectorFunction` không được liệt kê bảng nhập nhiều lần.


## Examples

### Example #1
Nhân hai cột của bảng nhập bằng cách xử lý dữ liệu theo lô 100 phần tử.
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
Tính điểm kiểm tra theo từng lô gồm hai phần và điền trường ID lô để có thể xác minh rằng quá trình phân lô đang hoạt động như mong đợi.
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
