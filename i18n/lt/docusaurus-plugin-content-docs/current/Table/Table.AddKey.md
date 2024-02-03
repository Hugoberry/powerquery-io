---
title: Table.AddKey
---

# Table.AddKey


## Description

Įtraukiamas raktas į lentelę.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Įtraukti raktą į <code>table</code>, kur <code>columns</code> yra stulpelių pavadinimų sąrašas, apibrėžiantis raktą, o <code>isPrimary</code> nurodo, ar raktas yra pirminis.


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
