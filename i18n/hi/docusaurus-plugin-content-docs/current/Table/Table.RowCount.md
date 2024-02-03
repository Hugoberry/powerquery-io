---
title: Table.RowCount
---

# Table.RowCount


## Description

तालिका की पंक्तियों की संख्या लौटाता है.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

<code>table</code> की पंक्तियों की संख्या लौटाता है.


## Examples

### Example #1 
तालिका में पंक्तियों की संख्या ढूँढें.
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
