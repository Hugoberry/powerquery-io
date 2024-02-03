---
title: Type.RecordFields
---

# Type.RecordFields


## Description

ส่งกลับระเบียนที่อธิบายเขตข้อมูลของประเภทระเบียนที่มีเขตข้อมูลแต่ละเขตเป็นประเภทระเบียนที่ถูกส่งกลับ ซึ่งมีชื่อและค่าที่สอดคล้องกัน


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

ส่งกลับระเบียนที่อธิบายเขตข้อมูลของระเบียน <code>type</code> แต่ละเขตข้อมูลของประเภทระเบียนที่ถูกส่งกลับมีชื่อและค่าที่สอดคล้องกัน ในรูปแบบของระเบียน <code>[ Type = type, Optional = logical ]</code>


## Examples

### Example #1 
ค้นหาชื่อและค่าของระเบียน&lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
