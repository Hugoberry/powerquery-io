---
title: Table.Group
---

# Table.Group


## Description

จัดกลุ่มแถวในตารางที่มีคีย์เดียวกัน


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

จัดกลุ่มแถว <code>table</code> ตามคอลัมน์หลักที่กำหนดโดย <code>key</code> <code>key</code> สามารถเป็นชื่อคอลัมน์เดียวหรือรายการชื่อคอลัมน์ได้    สำหรับแต่ละกลุ่ม จะมีการสร้างระเบียนที่มีคอลัมน์หลัก (และค่า) พร้อมกับคอลัมน์รวมที่ระบุโดย <code>aggregatedColumns</code>.    นอกจากนี้ยังสามารถระบุ <code>groupKind</code> และ <code>comparer</code> ได้อีกด้วย<br />    <br />    ถ้ามีการจัดเรียงข้อมูลตามคอลัมน์หลักแล้ว จะสามารถระบุ <code>groupKind</code> ของ GroupKind.Local ได้ การดำเนินการนี้อาจเป็นการปรับปรุงประสิทธิภาพของการจัดกลุ่มในบางกรณี    เนื่องจากแถวทั้งหมดที่มีชุดของค่าคีย์ที่กำหนดไว้จะถูกสันนิษฐานว่าอยู่ติดกัน<br />    <br />    เมื่อส่งผ่านการ <code>comparer</code> โปรดทราบว่าถ้าถือว่าคีย์ที่แตกต่างเท่ากัน แถวอาจอยู่ในกลุ่มที่มีคีย์ที่แตกต่างจากของตนเอง<br />    <br />    ฟังกืชันนี้ไม่รับประกันการจัดลำดับของแถวที่จะส่งกลับ  


## Examples

### Example #1 
จัดกลุ่มตารางโดยเพิ่มคอลัมน์รวม [total] ซึ่งมียอดรวมของราคา (&#34;each List.Sum([price])&#34;)
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
