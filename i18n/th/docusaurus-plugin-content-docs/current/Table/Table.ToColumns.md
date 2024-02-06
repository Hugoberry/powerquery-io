---
title: Table.ToColumns
---

# Table.ToColumns


สร้างรายการของรายการที่ซ้อนกันของค่าคอลัมน์จากตาราง


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

สร้างรายการของรายการที่ซ้อนกันจากตาราง <code>table</code>  แต่ละข้อมูลในรายการจะเป็นรายการภายในที่ประกอบด้วยค่าคอลัมน์


## Examples

### Example #1 
สร้างรายการค่าคอลัมน์จากตาราง
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
