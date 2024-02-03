---
title: Table.Keys
---

# Table.Keys


## Description

Vrne ključe navedene tabele.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Vrne ključe navedene tabele.


## Examples

### Example #1 
Pridobite seznam ključev za tabelo.
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
