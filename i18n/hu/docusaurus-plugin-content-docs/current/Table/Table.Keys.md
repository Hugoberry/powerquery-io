---
title: Table.Keys
---

# Table.Keys


## Description

A megadott táblázat kulcsait adja vissza.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

A megadott táblázat kulcsait adja vissza.


## Examples

### Example #1 
Táblázathoz tartozó kulcsok listájának beolvasása.
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
