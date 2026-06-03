---
title: BinaryFormat.List
---

# BinaryFormat.List


ส่งกลับรูปแบบไบนารีที่อ่านลำดับข้อมูลและส่งกลับรายการ


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

ส่งกลับรูปแบบไบนารีที่อ่านลำดับข้อมูลและส่งกลับ `list` พารามิเตอร์ `binaryFormat` จะระบุรูปแบบไบนารีของแต่ละรายการ มีสามวิธีในการกำหนดจำนวนรายการที่อ่าน:

-   หากไม่มีการระบุ `countOrCondition` รูปแบบไบนารีจะถูกอ่านจนกว่าจะไม่มีรายการอีกแล้ว
-   หาก `countOrCondition` เป็นตัวเลข รูปแบบไบนารีจะอ่านรายการจำนวนมากนั้น
-   หาก `countOrCondition` เป็นฟังก์ชัน ฟังก์ชันนั้นจะถูกเรียกสำหรับแต่ละรายการที่อ่าน ฟังก์ชันจะส่งกลับเป็น จริง เพื่อดำเนินการต่อ และ เท็จ เพื่อหยุดการอ่านรายการ ข้อมูลสุดท้ายจะถูกรวมในรายการ
-   หาก `countOrCondition` เป็นรูปแบบไบนารี จำนวนข้อมูลก็ควรมาก่อนรายการ และรูปแบบที่ระบุจะถูกใช้เพื่ออ่านจำนวน


## Examples

### Example #1
อ่านไบต์จนกว่าสิ้นสุดข้อมูล
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
อ่านสองไบต์
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3
อ่านไบต์จนกว่าค่าไบต์จะมากกว่าหรือเท่ากับสอง
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
