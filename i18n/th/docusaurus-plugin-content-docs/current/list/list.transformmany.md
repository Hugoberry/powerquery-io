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

ส่งกลับรายการที่มีองค์ประกอบที่คาดการณ์จากรายการอินพุต  
  
ฟังก์ชัน `collectionTransform` จะแปลงแต่ละองค์ประกอบเป็นรายการระดับกลาง และฟังก์ชัน `resultTransform` ได้รับองค์ประกอบเดิม เช่นเดียวกับรายการจากรายการระดับกลางเพื่อสร้างผลลัพธ์สุดท้าย  
  
ฟังก์ชัน `collectionTransform` มีลายเซ็น `(x เป็นค่าใดๆ) ตามที่แสดง => ...` ที่ `x` เป็นองค์ประกอบใน `list` ฟังก์ชัน `resultTransform` จะแสดงรูปร่างของผลลัพธ์และมีลายเซ็น `(x เป็นค่าใดๆ, y เป็นค่าใดๆ) เป็นค่าใดๆ => ...` ที่ `x` เป็นองค์ประกอบใน `list` และ `y` เป็นองค์ประกอบจากรายการที่สร้างโดยการส่ง `x` ไปยัง `collectionTransform`


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
