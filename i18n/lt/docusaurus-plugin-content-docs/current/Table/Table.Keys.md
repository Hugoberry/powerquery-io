---
title: Table.Keys
---

# Table.Keys


## Description

Pateikiami nurodytos lentelės raktai.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Pateikiami nurodytos lentelės raktai.


## Examples

### Example #1 
Gaukite lentelės raktų sąrašą.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation