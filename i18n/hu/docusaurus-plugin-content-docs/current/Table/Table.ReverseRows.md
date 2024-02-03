---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Táblát ad vissza, amely fordított sorrendben tartalmazza a sorokat.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Táblát ad vissza a bemeneti <code>table</code> táblából, amely fordított sorrendben tartalmazza a sorokat.


## Examples

### Example #1 
Fordított sorrendbe rendezi a sorokat a táblában.
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
