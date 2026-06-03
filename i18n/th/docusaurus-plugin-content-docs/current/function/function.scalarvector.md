---
title: Function.ScalarVector
---

# Function.ScalarVector


สร้างฟังก์ชันสเกลาบนฟังก์ชันเวกเตอร์ ส่งชุดคำเปลี่ยนแปลงคำขอหลายรายการ


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

ส่งกลับฟังก์ชันสเกลาของชนิด `scalarFunctionType` ที่เรียก `vectorFunction` ด้วยอาร์กิวเมนต์แถวเดียว และส่งกลับผลลัพธ์เดียว นอกจากนี้ เมื่อใช้ฟังก์ชันสเกลาสำหรับแต่ละแถวของตารางข้อมูลป้อนเข้าซ้ำๆ แล้ว เช่น Table.AddColumn ระบบจะใช้ `vectorFunction` ครั้งเดียวสำหรับข้อมูลป้อนเข้าทั้งหมดแทน

`vectorFunction` จะถูกส่งผ่านตารางที่คอลัมน์มีชื่อ และตำแหน่งพารามิเตอร์ของ `scalarFunctionType` ตรงกัน แต่ละแถวของตารางนี้ประกอบด้วยอาร์กิวเมนต์สำหรับการเรียกใช้ฟังก์ชันสเกลา โดยคอลัมน์ที่สอดคล้องกับพารามิเตอร์ของ `scalarFunctionType`

`vectorFunction` ต้องส่งกลับรายการที่มีความยาวเดียวกับตารางข้อมูลป้อนเข้า ซึ่งรายการในแต่ละตำแหน่งต้องเป็นผลลัพธ์เดียวกันกับการประเมินฟังก์ชันสเกลาบนแถวข้อมูลป้อนเข้าของตำแหน่งเดียวกัน

ตารางข้อมูลป้อนเข้าต้องมีการสตรีม ดังนั้น `vectorFunction` ต้องสตรีมผลลัพธ์เมื่อมีข้อมูลป้อนเข้ามา ซึ่งใช้ได้กับข้อมูลป้อนเข้ากลุ่มหนึ่งเท่านั้นในแต่ละครั้ง โดยเฉพาะอย่างยิ่ง `vectorFunction` ต้องไม่แจงนับตารางข้อมูลป้อนเข้ามากกว่าหนึ่งครั้ง


## Examples

### Example #1
คูณสองคอลัมน์ของตารางข้อมูลป้อนเข้าโดยการประมวลผลข้อมูลป้อนเข้าเป็นชุดละ 100 รายการ
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
คำนวณคะแนนการทดสอบเป็นชุดละสองรายการ และกรอกข้อมูลลงในเขตข้อมูล ID ชุดที่สามารถใช้เพื่อตรวจสอบว่าการจัดชุดทำงานได้ตามที่คาดไว้
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
