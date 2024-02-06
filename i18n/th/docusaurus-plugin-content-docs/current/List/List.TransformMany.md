---
title: List.TransformMany
---

# List.TransformMany


ส่งกลับรายการซึ่งมีองค์ประกอบที่ถูกแปลงจากรายการค่าที่ป้อนโดยใช้ฟังก์ชันที่ระบุ


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

ส่งกลับรายการที่มีองค์ประกอบที่คาดการณ์จากรายการอินพุต<br />    <br />    ฟังก์ชัน <code>collectionTransform</code> จะแปลงแต่ละองค์ประกอบเป็นรายการระดับกลาง และฟังก์ชัน <code>resultTransform</code> ได้รับองค์ประกอบเดิม เช่นเดียวกับรายการจากรายการระดับกลางเพื่อสร้างผลลัพธ์สุดท้าย<br />    <br />    ฟังก์ชัน <code>collectionTransform</code> มีลายเซ็น <code>(x เป็นค่าใดๆ) ตามที่แสดง => ...</code> ที่ <code>x</code> เป็นองค์ประกอบใน <code>list</code>    ฟังก์ชัน <code>resultTransform</code> จะแสดงรูปร่างของผลลัพธ์และมีลายเซ็น <code>(x เป็นค่าใดๆ, y เป็นค่าใดๆ) เป็นค่าใดๆ => ...</code> ที่ <code>x</code> เป็นองค์ประกอบใน <code>list</code> และ <code>y</code> เป็นองค์ประกอบจากรายการที่สร้างโดยการส่ง <code>x</code> ไปยัง <code>collectionTransform</code>


## Examples

### Example #1 
ลดรูปแบบโครงสร้างรายชื่อบุคคลและสัตว์เลี้ยงของพวกเขา
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
