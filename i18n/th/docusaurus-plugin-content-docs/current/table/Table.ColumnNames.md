---
title: Table.ColumnNames
---

# Table.ColumnNames


ส่งกลับชื่อคอลัมน์เป็นรายการ


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

ส่งกลับชื่อคอลัมน์ในตาราง <code>table</code> เป็นรายการข้อความ


## Examples

### Example #1 
ค้นหาชื่อคอลัมน์ในตาราง
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
