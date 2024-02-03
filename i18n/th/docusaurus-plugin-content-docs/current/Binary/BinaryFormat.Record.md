---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

ส่งกลับรูปแบบไบนารีที่อ่านระเบียน


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

ส่งกลับรูปแบบไบนารีที่อ่านระเบียน  พารามิเตอร์ <code>record</code> ระบุรูปแบบของระเบียน  แต่ละเขตข้อมูลในระเบียนสามารถมีรูปแบบไบนารีอื่นได้  ถ้าเขตข้อมูลมีค่าที่ไม่ใช่ค่ารูปแบบไบนารี จะไม่มีข้อมูลใดถูกอ่านสำหรับเขตข้อมูลนั้น และค่าเขตข้อมูลจะแสดงในผลลัพธ์


## Examples

### Example #1 
อ่านระเบียนที่มีจำนวนเต็ม 16 บิตหนึ่งค่าและจำนวนเต็ม 32 บิตหนึ่งค่า
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
