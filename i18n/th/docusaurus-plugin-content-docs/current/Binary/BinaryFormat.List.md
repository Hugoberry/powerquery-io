---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

ส่งกลับรูปแบบไบนารีที่อ่านลำดับข้อมูลและส่งกลับรายการ


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

ส่งกลับรูปแบบไบนารีที่อ่านลำดับข้อมูลและส่งกลับ <code>list</code>  พารามิเตอร์ <code>binaryFormat</code> จะระบุรูปแบบไบนารีของแต่ละรายการ  มีสามวิธีในการกำหนดจำนวนรายการที่อ่าน: <ul><li>หากไม่มีการระบุ <code>countOrCondition</code> รูปแบบไบนารีจะถูกอ่านจนกว่าจะไม่มีรายการอีกแล้ว</li><li>หาก <code>countOrCondition</code> เป็นตัวเลข รูปแบบไบนารีจะอ่านรายการจำนวนมากนั้น</li><li>หาก <code>countOrCondition</code> เป็นฟังก์ชัน ฟังก์ชันนั้นจะถูกเรียกสำหรับแต่ละรายการที่อ่าน  ฟังก์ชันจะส่งกลับเป็น จริง เพื่อดำเนินการต่อ และ เท็จ เพื่อหยุดการอ่านรายการ  ข้อมูลสุดท้ายจะถูกรวมในรายการ</li><li>หาก <code>countOrCondition</code> เป็นรูปแบบไบนารี จำนวนข้อมูลก็ควรมาก่อนรายการ และรูปแบบที่ระบุจะถูกใช้เพื่ออ่านจำนวน</li></ul>


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
