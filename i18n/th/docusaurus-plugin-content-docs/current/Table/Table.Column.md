---
title: Table.Column
---

# Table.Column


## Description

ส่งกลับคอลัมน์ที่ระบุของข้อมูลจากตารางในรูปแบบรายการ


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

ส่งกลับคอลัมน์ข้อมูลที่ระบุโดย <code>column</code> จากตาราง <code>table</code> ในรูปแบบรายการ


## Examples

### Example #1 
ส่งคืนค่าจากคอลัมน์ [Name] จากตาราง
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
