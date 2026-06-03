---
title: BinaryFormat.Length
---

# BinaryFormat.Length


ส่งกลับรูปแบบไบนารีที่จำกัดจำนวนข้อมูลที่สามารถอ่านได้


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

ส่งกลับรูปแบบไบนารีที่จํากัดจํานวนข้อมูลที่สามารถอ่านได้. ทั้ง `BinaryFormat.List` และ `BinaryFormat.Binary` สามารถใช้เพื่ออ่านข้อมูลจนถึงจุดสิ้นสุดได้ `BinaryFormat.Length` สามารถใช้เพื่อจำกัดจำนวนไบต์ที่อ่านได้ พารามิเตอร์ `binaryFormat` ระบุรูปแบบไบนารีที่จะจํากัด พารามิเตอร์ `length` ระบุจํานวนไบต์ที่จะอ่าน. พารามิเตอร์ `length` อาจเป็นค่าตัวเลข หรือค่ารูปแบบไบนารีที่ระบุรูปแบบของค่าความยาวที่ปรากฏอยู่ก่อนหน้าค่าที่กําลังอ่าน.


## Examples

### Example #1
จำกัดจำนวนไบต์ที่อ่านเป็น 2 เมื่ออ่านรายการไบต์
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
จํากัดจํานวนไบต์ที่อ่านเมื่ออ่านรายการไบต์เป็นค่าไบต์ที่อยู่ก่อนหน้ารายการ
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
