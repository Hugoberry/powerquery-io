---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

ดำเนินการรวมระหว่างตารางบนคอลัมน์ที่ให้และสร้างผลลัพธ์การรวมในคอลัมน์ใหม่


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

รวมแถวของ <code>table1</code> กับแถวของ <code>table2</code> ตามความเท่ากันของค่าคีย์คอลัมน์ที่เลือกโดย <code>key1</code> (สำหรับ <code>table1</code>) และ <code>key2</code> (สำหรับ <code>table2</code>) ผลลัพธ์จะถูกป้อนลงในคอลัมน์ที่ชื่อ <code>newColumnName</code>ฟังก์ชันนี้จะทำงานคล้ายกับ Table.Join ที่มี JoinKind ของ LeftOuter ยกเว้นตรงที่ผลลัพธ์การรวมจะปรากฏในลักษณะซ้อนกันแทนที่จะอยู่ในระนาบเดียวกัน


## Examples

### Example #1 
เพิ่มคอลัมน์การรวมลงใน (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) ที่ชื่อ &#34;price/stock&#34; จากตาราง (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) ที่รวมอยู่บน [saleID]
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
