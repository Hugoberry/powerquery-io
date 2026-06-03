---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

ส่งกลับรูปแบบไบนารีที่เลือกรูปแบบไบนารีถัดไปโดยยึดตามค่าที่ถูกอ่านแล้ว ค่ารูปแบบไบนารีที่ผลิตโดยฟังก์ชันนี้จะทำงานในลำดับขั้นตอนต่างๆ:

-   รูปแบบไบนารีที่ระบุโดยพารามิเตอร์ `binaryFormat` จะใช้เพื่ออ่านค่า
-   ค่าที่ถูกส่งไปยังฟังก์ชันตัวเลือกที่ระบุโดยพารามิเตอร์ `chooseFunction`
-   ฟังก์ชันตัวเลือกจะตรวจสอบค่าและส่งกลับรูปแบบไบนารีที่สอง
-   รูปแบบไบนารีที่สองจะใช้เพื่ออ่านค่าที่สอง
-   ถ้ามีการระบุฟังก์ชันการรวม ค่าที่หนึ่งและสองจะส่งผ่านไปยังฟังก์ชันการรวม และค่าผลลัพธ์จะถูกส่งกลับ
-   ถ้าไม่มีการระบุฟังก์ชันการรวม ค่าที่สองจะถูกส่งกลับ
-   ค่าที่สองจะถูกส่งกลับ

พารามิเตอร์ `type` ที่เลือกได้จะระบุชนิดรูปแบบไบนารีที่จะถูกส่งกลับโดยฟังก์ชันตัวเลือก อาจมีการระบุ `type any`, `type list` หรือ `type binary` หากไม่มีการระบุพารามิเตอร์ `type` จากนั้น `type any` จะถูกใช้งาน หาก `type list` หรือ `type binary` ถูกใช้งาน จากนั้นระบบอาจสามารถส่งกลับค่า `binary` หรือ `list` ที่สตรีมแทนค่าที่บัฟเฟอร์ซึ่งอาจลดปริมาณหน่วยความจำที่จำเป็นต่อการอ่านรูปแบบ


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
