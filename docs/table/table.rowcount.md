---
title: Table.RowCount
---

# Table.RowCount


Returns the number of rows in the table.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Remarks

Returns the number of rows in the <code>table</code>.


## Examples

### Example #1 
Find the number of rows in the table.
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
