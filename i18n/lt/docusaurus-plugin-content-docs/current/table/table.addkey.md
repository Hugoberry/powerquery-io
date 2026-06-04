---
title: Table.AddKey
---

# Table.AddKey


Įtraukiamas raktas į lentelę.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Įtraukti raktą į `table`, kur `columns` yra stulpelių pavadinimų sąrašas, apibrėžiantis raktą, o `isPrimary` nurodo, ar raktas yra pirminis.


## Examples

### Example #1
Į lentelę įtraukti vieno stulpelio pirminį raktą.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
