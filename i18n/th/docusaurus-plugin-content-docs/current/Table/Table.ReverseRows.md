---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

ส่งกลับตารางที่มีแถวในลำดับย้อนกลับ


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

ส่งกลับตารางที่มีแถวจากค่าที่ป้อน <code>table</code> ในลำดับย้อนกลับ


## Examples

### Example #1 
กลับแถวในตาราง
```powerquery
Table.ReverseRows(
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
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
