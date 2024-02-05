---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

สร้างสำเนาของแถวสำหรับแต่ละค่าในรายการ โดยกำหนดให้มีหนึ่งคอลัมน์ของหนึ่งรายการในตาราง


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

แยกรายการออกเป็นหนึ่งแถวสำหรับแต่ละค่า โดยกำหนดให้มี <code>table</code> ซึ่ง <code>column</code> เป็นรายการค่า ค่าในคอลัมน์อื่นจะถูกทำซ้ำในแถวใหม่แต่ละแถวที่สร้าง


## Examples

### Example #1 
แยกคอลัมน์รายการ [Name] ในตาราง
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
