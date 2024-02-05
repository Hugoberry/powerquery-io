---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

ส่งกลับรูปแบบไบนารีที่เลือกรูปแบบไบนารีถัดไปโดยยึดตามค่าที่ถูกอ่านแล้ว


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

ส่งกลับรูปแบบไบนารีที่เลือกรูปแบบไบนารีถัดไปโดยยึดตามค่าที่ถูกอ่านแล้ว  ค่ารูปแบบไบนารีที่ผลิตโดยฟังก์ชันนี้จะทำงานในลำดับขั้นตอนต่างๆ:<ul><li>รูปแบบไบนารีที่ระบุโดยพารามิเตอร์ <code>binaryFormat</code> จะใช้เพื่ออ่านค่า</li><li>ค่าที่ถูกส่งไปยังฟังก์ชันตัวเลือกที่ระบุโดยพารามิเตอร์ <code>chooseFunction</code> </li><li>ฟังก์ชันตัวเลือกจะตรวจสอบค่าและส่งกลับรูปแบบไบนารีที่สอง</li><li>รูปแบบไบนารีที่สองจะใช้เพื่ออ่านค่าที่สอง</li><li>ถ้ามีการระบุฟังก์ชันการรวม ค่าที่หนึ่งและสองจะส่งผ่านไปยังฟังก์ชันการรวม และค่าผลลัพธ์จะถูกส่งกลับ</li><li>ถ้าไม่มีการระบุฟังก์ชันการรวม ค่าที่สองจะถูกส่งกลับ</li><li>ค่าที่สองจะถูกส่งกลับ</li></ul>พารามิเตอร์ <code>type</code> ที่เลือกได้จะระบุชนิดรูปแบบไบนารีที่จะถูกส่งกลับโดยฟังก์ชันตัวเลือก  อาจมีการระบุ <code>type any</code>, <code>type list</code> หรือ <code>type binary</code>  หากไม่มีการระบุพารามิเตอร์ <code>type</code> จากนั้น <code>type any</code> จะถูกใช้งาน   หาก <code>type list</code> หรือ <code>type binary</code> ถูกใช้งาน จากนั้นระบบอาจสามารถส่งกลับค่า <code>binary</code> หรือ <code>list</code> ที่สตรีมแทนค่าที่บัฟเฟอร์ซึ่งอาจลดปริมาณหน่วยความจำที่จำเป็นต่อการอ่านรูปแบบ


## Examples

### Example #1 
อ่านรายการไบต์ที่มีการระบุจำนวนองค์ประกอบโดยไบต์แรก
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
อ่านรายการไบต์ที่มีการระบุจำนวนองค์ประกอบโดยไบต์แรกและรักษาไบต์แรกที่อ่านไว้
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
อ่านรายการไบต์ที่มีการระบุจำนวนองค์ประกอบโดยไบต์แรกโดยใช้รายการสตรีม
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
