---
title: Table.RowCount
---

# Table.RowCount


ส่งกลับจำนวนของแถวในตาราง


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Remarks

ส่งกลับจำนวนของแถวใน <code>table</code>


## Examples

### Example #1 
ค้นหาจำนวนแถวในตาราง
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
