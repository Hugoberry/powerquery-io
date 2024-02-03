---
title: Table.Keys
---

# Table.Keys


## Description

Atgriež norādītās tabulas atslēgas.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Atgriež norādītās tabulas atslēgas.


## Examples

### Example #1 
Iegūstiet tabulas atslēgu sarakstu.
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
