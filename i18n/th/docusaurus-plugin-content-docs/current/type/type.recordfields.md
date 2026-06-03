---
title: Type.RecordFields
---

# Type.RecordFields


ส่งกลับระเบียนที่อธิบายเขตข้อมูลของประเภทระเบียนที่มีเขตข้อมูลแต่ละเขตเป็นประเภทระเบียนที่ถูกส่งกลับ ซึ่งมีชื่อและค่าที่สอดคล้องกัน


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

ส่งกลับระเบียนที่อธิบายเขตข้อมูลของระเบียน `type` แต่ละเขตข้อมูลของประเภทระเบียนที่ถูกส่งกลับมีชื่อและค่าที่สอดคล้องกัน ในรูปแบบของระเบียน `[ Type = type, Optional = logical ]`


## Examples

### Example #1
ค้นหาชื่อและค่าของระเบียน`[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
