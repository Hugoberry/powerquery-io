---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

तालिका में मौजूद स्तंभों की संख्या लौटाता है.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

तालिका <code>table</code> में मौजूद स्तंभों की संख्या लौटाता है.


## Examples

### Example #1 
तालिका में मौजूद स्तंभों की संख्या ढूँढें.
```powerquery
Table.ColumnCount(
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
